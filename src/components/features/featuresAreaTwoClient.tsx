import { useState } from "react";
import { Link } from "react-router-dom";

const featuresData = [
  {
    bgClass: "bg-1",
    title: "Start Your Digital Journey Today",
    description:
      "Seize the Opportunity to Transform Your Business with Cutting-Edge Technology Solutions.",
    icon: "/images/icons/diagonal-arrow-right-up.svg",
  },
  {
    bgClass: "bg-2",
    title: "Start Your Digital Journey Today",
    description:
      "Seize the Opportunity to Transform Your Business with Cutting-Edge Technology Solutions.",
    icon: "/images/icons/diagonal-arrow-right-up.svg",
  },
  {
    bgClass: "bg-3",
    title: "Start Your Digital Journey Today",
    description:
      "Seize the Opportunity to Transform Your Business with Cutting-Edge Technology Solutions.",
    icon: "/images/icons/diagonal-arrow-right-up.svg",
  },
  {
    bgClass: "bg-4",
    title: "Work With Expert Developers",
    description:
      "Collaborate and build amazing solutions with experienced technology professionals.",
    icon: "/images/icons/diagonal-arrow-right-up.svg",
  },
];

const FeaturesAreaTwoClient = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      {featuresData.map((feature, idx) => (
        <div
          key={idx}
          className={`slide position-relative ${feature.bgClass} ${
            activeIndex === idx ? "active" : ""
          }`}
          onClick={() => setActiveIndex(idx)}
          style={{ cursor: "pointer" }}
        >
          <div className="features-content d-lg-flex align-items-center justify-content-between">
            <div className="content">
              <h3 className="fw-semibold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <Link
              to={"/contact"}
              className="link-btn d-inline-block text-center rounded-circle fw-medium"
            >
              <span className="d-block">Contact Us</span>
              <img
                width={20}
                height={20}
                src={feature.icon}
                alt="diagonal-arrow-right-up"
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturesAreaTwoClient;
