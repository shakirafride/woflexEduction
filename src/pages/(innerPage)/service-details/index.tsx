import PageHeader from "@/components/pageHeader";
import ServiceDetailsSidebar from "./serviceDetailsSidebar";

export default function ServiceDetails() {
  return (
    <>
      <PageHeader title="Service Details" />
      <div className="pb-120 border-bottom"></div>
      <div className="service-details-area bg-f3f3f3 ptb-120">
        <div className="container">
          <div
            className="row"
            data-cues="slideInUp"
            data-group="serviceDetailsContent"
          >
            <div className="col-lg-4 col-md-12">
              <ServiceDetailsSidebar />
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="service-details-desc">
                <div className="image">
                  <img
                    width={851}
                    height={557}
                    src="/images/service-details.jpg"
                    alt="service-details-image"
                  />
                </div>
                <h2 className="fw-semibold">Web Development</h2>
                <p>
                  Transform your business with cutting-edge web development solutions. 
                  Our comprehensive service is designed for businesses of all sizes, 
                  from startups to enterprise organizations. Focused on modern technologies 
                  and best practices, we build scalable web applications that drive 
                  business growth and enhance user engagement.
                </p>
                <h3 className="fw-semibold">Project Timeline:</h3>
                <ul>
                  <li>
                    Choose from flexible timelines: 4-week rapid development or
                    8-week comprehensive build.
                  </li>
                  <li>
                    Regular progress meetings twice a week, with each session lasting 60
                    minutes for project updates and feedback.
                  </li>
                </ul>
                <h3 className="fw-semibold">Service Objectives:</h3>
                <ol>
                  <li>Develop responsive and modern web applications.</li>
                  <li>Implement robust backend architecture and APIs.</li>
                  <li>Ensure optimal performance and security standards.</li>
                  <li>Integrate third-party services and payment systems.</li>
                  <li>Provide ongoing maintenance and technical support.</li>
                </ol>
                <div className="expert d-flex align-items-center">
                  <img
                    width={100}
                    height={100}
                    src="/images/users/user14.jpg"
                    className="rounded-circle"
                    alt="user-image"
                  />
                  <div>
                    <h4 className="fw-medium">Jeffrey E. Walton</h4>
                    <span className="d-block">
                      Senior Developer, Web Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}