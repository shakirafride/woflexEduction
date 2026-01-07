import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <div className="banner-area position-relative z-1">
      <div className="container">
        <div className="banner-text">
          <h1
            className="text-uppercase"
            data-cues="slideInUp"
            data-group="bannerContent"
          >
            <span className="d-block">Smart Learning </span>
            <span className="d-block">for a Multilingual </span>
            <span className="d-block">World</span>
          </h1>
        </div>
        <div className="banner-image text-center" data-cue="slideInUp">
          <img
            width={1296}
            height={392}
            src="/images/banners/banner1.jpg"
            alt="banner-image"
          />
        </div>
        <div className="banner-content">
          <div
            className="row align-items-center"
            data-cues="slideInUp"
            data-group="bannerText"
          >
            <div className="col-lg-6 col-md-8">
              <p>
                Unlock the world through intelligent language learning. We offer comprehensive,
                innovative, and personalized multilingual education experiences.
              </p>
              <div className="btn-box d-flex align-items-center">
                <Link to="/contact" className="default-btn">
                  Start Learning
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="text-md-end">
                  <Link
                  to="/courses"
                  className="link-btn d-inline-block text-center rounded-circle fw-medium"
                >
                  <span className="d-block">Explore All Courses</span>
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
        </div>
      </div>
      <div className="shape1">
        <img
          width={150}
          height={148}
          src="/images/shapes/shape1.svg"
          alt="shape1"
        />
      </div>
      <div className="shape2">
        <img
          width={135}
          height={135}
          src="/images/shapes/shape2.svg"
          alt="shape2"
        />
      </div>
    </div>
  );
};

export default HeroOne;
