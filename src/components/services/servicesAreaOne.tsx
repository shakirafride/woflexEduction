import { Service } from "@/db/servicesData";
import { Link } from "react-router-dom";
import ServicesCard from "./servicesCard";

interface PropsType {
  titleShown?: boolean;
  className?: string;
  data: Service[];
}
const ServicesAreaOne = ({ titleShown, className, data }: PropsType) => {
  return (
    <div
      className={`services-area border-bottom border-top bg-f3f3f3 pt-120 pb-95 ${className}`}
    >
      <div className="container">
        {titleShown && (
          <div className="section-title position-relative">
            <h2 className="mb-0 fw-semibold text-uppercase">
              Our Popular Services
            </h2>
            <Link to="/services" className="default-btn">
              Explore All Services
            </Link>
          </div>
        )}
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="ServicesContent"
        >
          {data.map((service, idx) => (
            <div key={idx} className="col-xl-4 col-md-6">
              <ServicesCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAreaOne;