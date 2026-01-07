import { Link } from "react-router-dom";

const CtaAreaTwo = () => {
  return (
    <div className="cta-area bg-color">
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-6 col-md-12 px-0">
            <div
              className="cta-content-two position-relative"
              data-cues="slideInUp"
              data-group="ctaContent"
            >
              <h2 className="mb-0 fw-semibold text-uppercase">
                Accelerate Your Digital Transformation Journey - Explore Opportunities to
                Innovate and Scale Your Business
              </h2>
              <Link
                to="/contact"
                className="link-btn d-inline-block text-center rounded-circle fw-medium"
              >
                <span className="d-block">Contact Us</span>
                <img
                  width={20}
                  height={20}
                  src="/images/icons/diagonal-arrow-right-up.svg"
                  alt="diagonal-arrow-right-up"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 px-0">
            <div className="cta-image-two">
              <img
                width={1375}
                height={710}
                src="/images/cta2.jpg"
                alt="cta-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaAreaTwo;
