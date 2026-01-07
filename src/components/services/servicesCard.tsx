import { Service } from "@/db/servicesData";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }: { service: Service }) => {
  return (
    <div className="single-service-box mb-25 position-relative">
      <h3 className="fw-semibold">
        <Link to={"/service-details"}>{service.title}</Link>
      </h3>
      <p>{service.description}</p>
      <div className="expert d-flex align-items-center">
        <img
          width={50}
          height={50}
          src={service.expert.image}
          className="rounded-circle"
          alt="user-image"
        />
        <div>
          <h4 className="fw-medium">{service.expert.name}</h4>
          <span className="d-block">{service.expert.role}</span>
        </div>
      </div>
      <Link to={"/service-details"} className="default-btn">
        Get Started
      </Link>
    </div>
  );
};

export default ServicesCard;