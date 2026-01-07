import { blogPostsDataTwo } from "@/db/blogPostsData";
import { Link } from "react-router-dom";

const BlogsAreaTwo = () => {
  return (
    <div className="blog-area pt-120 pb-95">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="fs-32 fw-semibold mx-auto mb-0 text-uppercase">
            Latest News &amp; Blog
          </h2>
        </div>
        <div
          className="row justify-content-center"
          data-cues="slideInUp"
          data-group="blogContent"
        >
          {blogPostsDataTwo.map((blog, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="single-post-box position-relative mb-25">
                <div className="image position-relative">
                  <Link to={"/blog-details"} className="d-block">
                    <img
                      width={416}
                      height={364}
                      sizes="100vw"
                      src={blog.image}
                      alt="blog-image"
                    />
                  </Link>
                  <div className="date">{blog.date}</div>
                  <Link to={"/blog-details"} className="default-btn">
                    Read More
                  </Link>
                </div>
                <div className="content">
                  <h3 className="fw-semibold">
                    <Link to={"/blog-details"}>{blog.title}</Link>
                  </h3>
                  <p>{blog.description}</p>
                  <Link
                   to={"/blog-details"}
                    className="link-btn fw-medium d-inline-block"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsAreaTwo;
