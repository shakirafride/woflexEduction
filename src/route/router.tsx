import RootLayout from "@/layout/root";
import About from "@/pages/(innerPage)/about";
import Blog from "@/pages/(innerPage)/blog";
import BlogDetails from "@/pages/(innerPage)/blog-details";
import Contact from "@/pages/(innerPage)/contact";
import ServiceDetails from "@/pages/(innerPage)/service-details";
import Services from "@/pages/(innerPage)/services";
import Login from "@/pages/(innerPage)/login";
import NotFound from "@/pages/(innerPage)/not-found";
import Register from "@/pages/(innerPage)/register";
import Team from "@/pages/(innerPage)/team";
import TeamDetails from "@/pages/(innerPage)/team-details";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/not-found",
        element: <NotFound />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/team-details",
        element: <TeamDetails />,
      },
    ],
  },
]);
