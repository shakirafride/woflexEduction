import { servicesData } from "@/db/servicesData";
import { Link } from "react-router-dom";

const ServicesAreaTwo = () => {
  return (
    <div className="services-area pb-95">
      <div className="container">
        <div className="section-title d-md-flex align-items-center justify-content-between">
          <div className="title">
            <h2 className="fs-32 mb-0 fw-semibold text-uppercase">
              Our Popular Services
            </h2>
            <p>
              Embark on a Comprehensive Digital Experience: Discover Our Wide
              Range of Technology Services Designed to Scale Your Business.
            </p>
          </div>
          <Link
            to="/services"
            className="link-btn d-inline-block text-center rounded-circle fw-medium"
          >
            <span className="d-block">Explore All Services</span>
            <img
              width={20}
              height={20}
              src="/images/icons/diagonal-arrow-right-up.svg"
              alt="diagonal-arrow-right-up"
            />
          </Link>
        </div>
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="servicesContent"
        >
          {servicesData.slice(0, 3).map((service, idx) => (
            <div key={idx} className="col-lg-4 col-sm-6">
              <div className="single-service-item bg-f6ffeb mb-25 position-relative">
                <div className="number lh-1 fw-semibold">0{idx + 1}</div>
                <h3 className="fw-semibold">
                  <Link to="/service-details">{service.title}</Link>
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
                    <span className="d-block">Expert</span>
                  </div>
                </div>
                <Link to="/service-details" className="link-btn d-inline-block">
                  <img
                  width={20}
                  height={20}
                  src="/images/icons/arrow-right-up.svg"
                  alt="arrow-right-up"
                />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAreaTwo;