import { feedbackDataTwo } from "@/db/feedbackDataTwo";
import FeedbackTwoClient from "./feedbackTwoClient";

const FeedbackTwo = () => {
  return (
    <div className="testimonials-area ptb-120">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="fs-32 fw-semibold mx-auto mb-0 text-uppercase">
            In Their Own Words: Student Testimonials
          </h2>
        </div>
      </div>
      <FeedbackTwoClient feedbackDataTwo={feedbackDataTwo} />
    </div>
  );
};

export default FeedbackTwo;
