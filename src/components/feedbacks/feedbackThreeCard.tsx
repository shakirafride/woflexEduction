import { feedbackType } from "@/db/feedbackDataThree";

const FeedbackThreeCard = ({ item }: { item: feedbackType }) => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-5 col-md-5">
        <div className="image text-center">
          <img
            width={233}
            height={266}
            // style={{ width: "100%" }}
            src={item.image}
            alt="subtract-image"
          />
        </div>
      </div>
      <div className="col-lg-7 col-md-7">
        <div className="content">
          <h3 className="fw-semibold">{item.name}</h3>
          <span className="d-block designation">{item.designation}</span>
          <div className="ratings">
            <img
              width={160}
              height={30}
              src={item.rating ? item.rating : ""}
              alt="stars-5-1"
            />
          </div>
          <p>{item.feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackThreeCard;
