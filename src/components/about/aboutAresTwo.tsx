
const AboutAreaTwo = () => {
  return (
    <div className="who-we-are-area ptb-120">
      <div className="container">
        <div
          className="row align-items-center"
          data-cues="slideInUp"
          data-group="whoWeAreContent"
        >
          <div className="col-lg-6 col-md-12">
            <div className="who-we-are-content">
              <h2 className="text-uppercase fw-semibold">
                Who We Are: Leaders in Technology Innovation
              </h2>
              <p>
                We believe in the transformative power of technology. Established
                with a vision to bridge digital divides and foster business
                growth, our company is dedicated to providing
                unparalleled technology solutions and experiences. With a diverse team
                of passionate developers and consultants.
              </p>
              <div className="funfacts">
                <h3 className="fw-semibold">
                  250<span>+</span>
                </h3>
                <p className="fw-medium">Trusted partners</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="who-we-are-image">
              <div className="users">
                <div className="d-flex align-items-center">
                  <img
                    height={57}
                    width={57}
                    src="/images/users/user6.jpg"
                    className="rounded-circle"
                    alt="user-image"
                  />
                  <img
                    height={57}
                    width={57}
                    src="/images/users/user7.jpg"
                    className="rounded-circle"
                    alt="user-image"
                  />
                  <img
                    height={57}
                    width={57}
                    src="/images/users/user8.jpg"
                    className="rounded-circle"
                    alt="user-image"
                  />
                  <img
                    height={57}
                    width={57}
                    src="/images/users/user9.jpg"
                    className="rounded-circle"
                    alt="user-image"
                  />
                </div>
                <span className="d-block fw-medium">1000+</span>
                <p>Positive feedback by our clients</p>
              </div>
              <div className="image position-relative">
                <img
                  height={247}
                  width={603}
                  src="/images/about-us/about3.jpg"
                  alt="who-we-are-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaTwo;
