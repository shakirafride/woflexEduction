import { Link } from "react-router-dom";

const AboutAreaOne = ({ className }: { className?: string }) => {
  return (
    <div className={`about-us-area position-relative z-1 ptb-120 ${className}`}>
      <div className="container">
        <div
          className="row align-items-center"
          data-cues="slideInUp"
          data-group="aboutUsContent"
        >
          <div className="col-lg-6 col-md-12">
            <div className="about-us-image text-center">
              <img
                width={618}
                height={608}
                src="/images/about-us/about1.jpg"
                alt="about-image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-us-content">
              <h2 className="fw-semibold text-uppercase">
                Exploring Our Technology Journey
              </h2>
              <p>
                We are dedicated to fostering a vibrant community of technology
                innovators committed to digital excellence and business
                transformation. Established in 2002.
              </p>
              <p>
                Our journey began with a vision to provide comprehensive and
                cutting-edge technology solutions guided by innovation and expertise.
              </p>
              <Link to="/services" className="default-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaOne;
