const features = [
  {
    icon: "/images/icons/expert3.svg",
    title: "Expert Developers",
    desc: "Experienced professionals with cutting-edge skills.",
  },
  {
    icon: "/images/icons/small3.svg",
    title: "Agile Teams",
    desc: "Small, focused teams for maximum efficiency.",
  },
  {
    icon: "/images/icons/learning3.svg",
    title: "Continuous Innovation",
    desc: "Always adopting the latest technologies.",
  },
  {
    icon: "/images/icons/cultural.svg",
    title: "Global Solutions",
    desc: "Technology solutions for worldwide markets.",
  },
];

const WhyChooseUsThree = () => {
  return (
    <div className="why-lanklub-area overflow-hidden ptb-120">
      <div className="container-fluid px-0">
        <div
          className="row align-items-center mx-0"
          data-cues="slideInUp"
          data-group="whyLanklubContent"
        >
          <div className="col-lg-4 col-md-12 px-0">
            <div className="why-lanklub-image position-relative">
              <div className="content">
                <div className="text lh-1 text-uppercase fw-bold">
                  technology
                </div>
              </div>
              <div className="image position-relative">
                <img
                  width={476}
                  height={773}
                  src="/images/why-lanklub.jpg"
                  alt="why-lanklub-image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 px-0">
            <div className="why-lanklub-content">
              <h2 className="fw-semibold text-uppercase">
                Why EduHub? Exceptional Technology Solutions, Every Time
              </h2>
              <p>
                Transform your business with cutting-edge technology solutions.
                Our comprehensive services have been the industry standard
                since our founding, when our expert team developed innovative
                solutions to help businesses scale and succeed. We have evolved
                through multiple technology cycles and continue to lead.
              </p>
              <div className="features-list">
                <div className="row">
                  {features.map((feature) => (
                    <div className="col-lg-5 col-md-6" key={feature.title}>
                      <div className="box d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <img
                            width={28}
                            height={28}
                            src={feature.icon}
                            alt={"icon"}
                          />
                        </div>
                        <div>
                          <h3 className="fw-medium">{feature.title}</h3>
                          <p>{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p>
                Our technology solutions are designed to meet modern business
                needs and drive digital transformation. We have been at the
                forefront of innovation since our establishment, helping
                companies leverage technology for competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsThree;
