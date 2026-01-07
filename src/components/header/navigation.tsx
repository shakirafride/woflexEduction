import { NavLink } from "@/db/navLinks";
import { BRANDING } from "@/constants/branding";
import { Link } from "react-router-dom";
import MenuItem from "./menuItem";
import MobileNavbar from "./mobileNavbar";

interface NavigationProps {
  logo: string;
  navLinks: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ logo, navLinks }) => {
  return (
    <>
      <MobileNavbar logo={logo} />
      <div className="lanklub-nav">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img 
                width={BRANDING.logos.width} 
                height={BRANDING.logos.height} 
                src={logo} 
                alt={`${BRANDING.company.name} logo`} 
              />
            </Link>
            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav mx-auto">
                {navLinks.map((link, index) => (
                  <MenuItem key={index} item={link} />
                ))}
              </ul>
              <div className="others-option">
                <Link to="/services" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
