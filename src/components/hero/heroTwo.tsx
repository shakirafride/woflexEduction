import { Link } from "react-router-dom";

const HeroTwo = () => {
  return (
    <div className="main-banner-area position-relative z-1">
      <div className="container">
        <div
          className="main-banner-content text-center"
          data-cues="slideInUp"
          data-group="bannerContent"
        >
          <h1>Begin Your Digital Transformation Journey</h1>
          <p className="mx-auto">
            Embark on a Technology-Driven Future: Where Innovation Opens Doors
            to Unlimited Business Opportunities
          </p>
          <div className="btn-box">
            <Link to="/contact" className="default-btn">
              Get In Touch
            </Link>
            <Link to="/services" className="default-btn">
              Get Started
            </Link>
          </div>
        </div>
        <div className="main-banner-image text-center" data-cue="slideInUp">
          <img
            width={1296}
            height={387}
            src="/images/banners/banner2.png"
            alt="banner-image"
          />
        </div>
      </div>
      <div className="shape4">
        <img
          width={100}
          height={87}
          src="/images/shapes/shape4.svg"
          alt="shape4"
        />
      </div>
      <div className="shape5">
        <img
          width={121}
          height={164}
          src="/images/shapes/shape5.svg"
          alt="shape5"
        />
      </div>
    </div>
  );
};

export default HeroTwo;
