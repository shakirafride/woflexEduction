import { Link } from "react-router-dom";

const services = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Mobile Development" },
  { id: 3, name: "UI/UX Design" },
  { id: 4, name: "Digital Marketing" },
  { id: 5, name: "Cloud Solutions" },
];

const ServiceDetailsSidebar = () => {
  return (
    <div className="service-details-sidebar">
      <div className="service-list">
        <h3 className="fw-semibold">Service List</h3>
        <ul className="p-0 m-0 list-unstyled">
          {services.map((service, idx) => (
            <li key={service.id}>
              <Link
                to="/service-details"
                className={`fw-medium d-block${idx === 0 ? " active" : ""}`}
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="quote-form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control shadow-none bg-transparent"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control shadow-none bg-transparent"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form-group">
            <select className="form-select shadow-none bg-transparent">
              <option defaultValue={"Select Service"}>Select Service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="default-btn d-block w-100">
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetailsSidebar;