import { pricingData } from "@/db/pricingData";
import { Link } from "react-router-dom";

const PricingArea = () => {
  return (
    <div className="pricing-area bg-f3f3f3 pt-120 pb-95">
      <div className="container">
        <div className="section-title">
          <div className="title">
            <h2 className="fs-32 mb-0 fw-semibold text-uppercase">
              Understanding Our Pricing
            </h2>
          </div>
        </div>
        {/** Pricing data array */}
        {
          <div
            className="pricing-boxes-list"
            data-cues="slideInUp"
            data-group="pricingContent"
          >
            {pricingData.map((item) => (
              <div className="single-pricing-box" key={item.title}>
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <h3 className="price mb-0 fw-semibold">{item.price}</h3>
                  </div>
                  <div className="col-lg-3">
                    <h3 className="title mb-0 fw-semibold text-lg-center">
                      {item.title}
                    </h3>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-8">
                    <ul className="features-list p-0 mb-0 list-unstyled">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx}>
                          <span className="d-block position-relative">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-md-4 text-sm-end">
                    <Link
                      to="#"
                      className="link-btn d-inline-block text-center rounded-circle fw-medium"
                    >
                      <span className="d-block">Buy Now</span>
                      <img
                        width={20}
                        height={20}
                        src="/images/icons/diagonal-arrow-right-up.svg"
                        alt="diagonal-arrow-right-up"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default PricingArea;
