import { useEffect, useRef, useState } from "react";

interface HeaderClientProps {
  children: React.ReactNode;
  className?: string;
}

const HeaderClient: React.FC<HeaderClientProps> = ({ children, className }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (navbarRef.current) {
            setIsSticky(window.scrollY > 120);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isSticky);
  return (
    <div
      ref={navbarRef}
      className={`navbar-area position-fixed top-0 start-0 end-0 ${
        isSticky ? "is-sticky" : ""
      } ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default HeaderClient;
