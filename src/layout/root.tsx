import FooterOne from "@/components/footerOne";
import Header from "@/components/header";
import { Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <FooterOne />
    </>
  );
};

export default RootLayout;
