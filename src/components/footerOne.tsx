import { Link } from "react-router-dom";
import { BRANDING } from "@/constants/branding";

const FooterOne = () => {
  return (
    <footer className="footer-area bg-f6ffeb pt-120">
      <div className="container">
        <div
          className="subscribe-box row"
          data-cues="slideInUp"
          data-group="subscribeContent"
        >
          <div className="col-lg-6 col-md-12">
            <div className="subscribe-content">
              <h3 className="fw-semibold">Subscribe to Newsletter</h3>
              <p>Stay updated with our latest news and offers</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="subscribe-form">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email address"
                />
                <button type="button">Subscribe</button>
              </form>
              <p>By subscribing, you agree to our Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="row" data-cues="fadeIn" data-group="footerContent">
          <div className="col-md-3 col-sm-6">
            <div className="single-footer-widget mb-25">
              <Link to="/" className="logo mb-0 d-inline-block">
                <img
                  width={BRANDING.logos.width}
                  height={BRANDING.logos.height}
                  src={BRANDING.logos.main}
                  alt={`${BRANDING.company.name} logo`}
                />
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-footer-widget mb-25">
              <h3 className="fw-medium">About Us</h3>
              <ul className="custom-links p-0 mb-0 list-unstyled">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/contact">Support</Link>
                </li>
                <li>
                  <Link to="/blog">Resources</Link>
                </li>
                <li>
                  <Link to="/blog">Help Center</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-footer-widget mb-25">
              <h3 className="fw-medium">Courses</h3>
              <ul className="custom-links p-0 mb-0 list-unstyled">
                <li>
                  <Link to="/service-details">Technology Solutions</Link>
                </li>
                <li>
                  <Link to="#">Testimonials</Link>
                </li>
                <li>
                  <Link to="#">Events</Link>
                </li>
                <li>
                  <Link to="#">Partners</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-footer-widget mb-25">
              <h3 className="fw-medium">Terms</h3>
              <ul className="custom-links p-0 mb-0 list-unstyled">
                <li>
                  <Link to="/contact">Privacy</Link>
                </li>
                <li>
                  <Link to="/contact">Cookies</Link>
                </li>
                <li>
                  <Link to="/blog">Sitemap</Link>
                </li>
                <li>
                  <Link to="/contact">Accessibility</Link>
                </li>
                <li>
                  <Link to="/contact">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-area border-top">
          <div className="row align-items-center">
            <div className="col-lg-3 col-sm-6">
              <p className="mb-0">© 2025 {BRANDING.company.name}. All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-sm-6">
              <ul className="custom-links mb-0 list-unstyled">
                <li className="d-inline-block">
                  <Link to="/contact">Privacy Policy</Link>
                </li>
                <li className="d-inline-block">
                  <Link to="/contact">Terms of Service</Link>
                </li>
                <li className="d-inline-block">
                  <Link to="/contact">Cookies Settings</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="socials">
                <Link
                  to="#"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-facebook-f" />
                </Link>
                <Link
                  to="#"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-x-twitter" />
                </Link>
                <Link
                  to="#"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
                <Link
                  to="#"
                  className="d-inline-block position-relative rounded-circle text-center"
                >
                  <i className="fa-brands fa-google" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
