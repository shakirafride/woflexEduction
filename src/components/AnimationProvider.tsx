import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AnimationProviderProps {
  children: React.ReactNode;
}

const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const animatedElements = gsap.utils.toArray<HTMLElement>(
        "[data-cues]",
        scopeRef.current!
      );

      animatedElements.forEach((element) => {
        const cue = element.getAttribute("data-cues");
        const groupName = element.getAttribute("data-group");

        let animationConfig: gsap.TweenVars;

        switch (cue) {
          case "slideInUp":
            animationConfig = {
              from: { y: 50, opacity: 0 },
              to: { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            };
            break;
          case "slideInDown":
            animationConfig = {
              from: { y: -50, opacity: 0 },
              to: { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            };
            break;
          case "slideInLeft":
            animationConfig = {
              from: { x: -50, opacity: 0 },
              to: { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
            };
            break;
          case "slideInRight":
            animationConfig = {
              from: { x: 50, opacity: 0 },
              to: { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
            };
            break;
          case "fadeIn":
            animationConfig = {
              from: { opacity: 0 },
              to: { opacity: 1, duration: 1, ease: "power3.out" },
            };
            break;
          case "zoomIn":
            animationConfig = {
              from: { scale: 0.8, opacity: 0 },
              to: { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
            };
            break;
          default:
            animationConfig = {
              from: { opacity: 0 },
              to: { opacity: 1, duration: 1, ease: "power3.out" },
            };
            break;
        }

        if (groupName) {
          const childElements = Array.from(element.children) as HTMLElement[];
          if (childElements.length > 0) {
            const timeline = gsap.timeline({ paused: true });

            timeline.fromTo(element, animationConfig.from, {
              ...animationConfig.to,
              duration: 0.8,
            });

            childElements.forEach((child, index) => {
              timeline.fromTo(
                child,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out",
                  delay: index * 0.1,
                },
                "-=0.6"
              );
            });

            ScrollTrigger.create({
              trigger: element,
              animation: timeline,
              toggleActions: "play none none none",
              start: "top 90%",
            });
          }
        } else {
          const tween = gsap.fromTo(
            element,
            animationConfig.from,
            animationConfig.to
          );

          ScrollTrigger.create({
            trigger: element,
            animation: tween,
            toggleActions: "play none none none",
            start: "top 90%",
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: scopeRef } // ✅ only runs for children inside this scope
  );

  return <div ref={scopeRef}>{children}</div>;
};

export default AnimationProvider;
