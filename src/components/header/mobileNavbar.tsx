import { NavLink, navLinks } from "@/db/navLinks";
import { BRANDING } from "@/constants/branding";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { Link, useLocation } from "react-router-dom";

const isMenuActive = (item: NavLink, pathname: string): boolean => {
  if (item.href === pathname) {
    return true;
  }
  return !!item.submenu?.some((child: NavLink) =>
    isMenuActive(child, pathname)
  );
};

const MenuItem: React.FC<{
  item: NavLink;
  index: number;
  openDropdown: number | null;
  setOpenDropdown: (index: number | null) => void;
  isNested?: boolean;
  nestLevel?: number;
}> = ({
  item,
  index,
  openDropdown,
  setOpenDropdown,
  isNested = false,
  nestLevel = 0,
}) => {
  const { pathname } = useLocation();
  const isActive = isMenuActive(item, pathname);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const isOpen = openDropdown === index;

  // For nested dropdowns, we need separate state management
  const [nestedOpenDropdown, setNestedOpenDropdown] = useState<number | null>(
    null
  );

  const toggleSubmenu = (e: React.MouseEvent) => {
    if (hasSubmenu) {
      e.preventDefault();

      if (isNested) {
        // For nested items, use local state
        setNestedOpenDropdown(nestedOpenDropdown === index ? null : index);
      } else {
        // For top-level items, use parent state
        setOpenDropdown(isOpen ? null : index);
      }
    }
  };

  // Determine which state to use for nested items
  const currentOpenDropdown = isNested ? nestedOpenDropdown : openDropdown;
  const currentSetOpenDropdown = isNested
    ? setNestedOpenDropdown
    : setOpenDropdown;

  // For nested items, check against nestedOpenDropdown instead of openDropdown
  const isNestedOpen = isNested ? nestedOpenDropdown === index : isOpen;

  // Generate appropriate className based on nest level
  const getSubmenuClass = (level: number) => {
    if (level === 0) return "submenu";
    if (level === 1) return "nested-subdropdown";
    return `nested-subdropdown-level-${level}`;
  };

  return (
    <div className={`nav-item ${hasSubmenu ? "" : ""}`}>
      <Link
        to={item.href}
        onClick={toggleSubmenu}
        className={`d-flex justify-content-between align-items-center nav-link ${
          isActive ? "active" : ""
        }`}
      >
        {item.title}{" "}
        {hasSubmenu && (
          <i
            className={`fa-solid ${isNestedOpen ? "fa-minus" : "fa-plus"}`}
          ></i>
        )}
      </Link>
      {hasSubmenu && (
        <AnimateHeight
          duration={500}
          height={isNestedOpen ? "auto" : 0}
          className={getSubmenuClass(nestLevel)}
        >
          <div>
            {item.submenu?.map((subItem: NavLink, subIndex: number) => (
              <MenuItem
                key={subIndex}
                item={subItem}
                index={subIndex} // Use simple subIndex for nested items
                openDropdown={currentOpenDropdown}
                setOpenDropdown={currentSetOpenDropdown}
                isNested={true} // Mark as nested
                nestLevel={nestLevel + 1} // Increment nest level
              />
            ))}
          </div>
        </AnimateHeight>
      )}
    </div>
  );
};

const MobileNavbar = ({ logo }: { logo?: string }) => {
  const [navbarExpend, setNavbarExpend] = useState<number | "auto">(0);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Close all dropdowns when main navbar is toggled
  const toggleNavbar = () => {
    const newExpendState = navbarExpend === 0 ? "auto" : 0;
    setNavbarExpend(newExpendState);

    // Close all dropdowns when navbar is closed
    if (newExpendState === 0) {
      setOpenDropdown(null);
    }
  };

  return (
    <div className="lanklub-responsive-nav">
      <div className="container">
        <div className="lanklub-responsive-menu">
          <div className="logo">
            <Link to="/">
              <img
                width={BRANDING.logos.width}
                height={BRANDING.logos.height}
                src={logo || BRANDING.logos.main}
                alt={`${BRANDING.company.name} logo`}
              />
            </Link>
          </div>
          <div className="others-option d-flex align-items-center gap-4">
            <Link to="/services" className="default-btn">
              Get Started
            </Link>
            <div style={{ cursor: "pointer" }} onClick={toggleNavbar}>
              <i className="fa-solid fa-bars fs-2"></i>
            </div>
          </div>
          <AnimateHeight
            id="example-panel"
            duration={500}
            height={navbarExpend}
            className={`navbar-open`}
          >
            <div className="mobile-menu">
              {navLinks.map((link, index) => (
                <MenuItem
                  item={link}
                  index={index}
                  key={index}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                  isNested={false} // Mark as top-level
                  nestLevel={0} // Start at level 0
                />
              ))}
            </div>
          </AnimateHeight>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
