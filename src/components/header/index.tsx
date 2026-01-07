import { navLinks } from "@/db/navLinks";
import { getLogo } from "@/constants/branding";
import HeaderClient from "./headerClient";
import Navigation from "./navigation";

interface HeaderProps {
  className?: string;
  logo?: string;
  theme?: 'light' | 'dark';
}

const Header = ({ className, logo, theme = 'light' }: HeaderProps) => {
  const logoSrc = logo || getLogo(theme);
  
  return (
    <HeaderClient className={className || ""}>
      <Navigation navLinks={navLinks} logo={logoSrc} />
    </HeaderClient>
  );
};

export default Header;
