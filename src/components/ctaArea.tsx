import { Link } from "react-router-dom";

const CtaArea = () => {
  return (
    <div className="cta-area border-bottom border-top">
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-6 col-md-12 px-0">
            <div className="cta-content">
              <div
                className="content"
                data-cues="slideInUp"
                data-group="ctaContent"
              >
                <h2 className="text-uppercase fw-semibold">
                  Unlock Your Business Potential
                </h2>
                <p>
                  Embark on an exciting journey to discover the power of
                  digital transformation through our innovative technology solutions.
                </p>
                <div className="btn-box">
                  <Link to="/services" className="default-btn">
                    Get Started
                  </Link>
                  <Link to="/contact" className="default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 px-0">
            <div className="cta-image">
              <img
                width={1285}
                height={760}
                src="/images/cta.jpg"
                alt="cta-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;
