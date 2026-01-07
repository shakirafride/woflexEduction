import { Link } from "react-router-dom";

const features = [
  {
    title: "React",
    description: "Build Modern Web Apps",
  },
  {
    title: "Node.js",
    description: "Powerful Backend Solutions",
  },
  {
    title: "Python",
    description: "AI & Data Analytics",
  },
  {
    title: "Cloud",
    description: "Scalable Infrastructure",
  },
];

const FeaturesArea = () => {
  return (
    <div className="features-area pt-120 pb-95 position-relative z-1 border-top border-bottom bg-f6ffeb">
      <div className="container">
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="featuresContent"
        >
          {features.map((feature) => (
            <div className="col-lg-3 col-sm-6" key={feature.title}>
              <div className="single-feature-box text-center mb-25 position-relative z-1">
                <h3 className="fw-semibold">{feature.title}</h3>
                <p className="mx-auto">{feature.description}</p>
                <Link
                  to={"/services"}
                  className="link-btn position-relative z-1 d-inline-block rounded-circle text-center"
                >
                  <img
                    width={20}
                    height={20}
                    src="/images/icons/diagonal-arrow-right-up.svg"
                    alt="diagonal-arrow-right-up"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shape3">
        <img width={100} height={87} src="/images/shapes/shape3.svg" alt="shape3" />
      </div>
    </div>
  );
};

export default FeaturesArea;
