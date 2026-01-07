import "@/assets/css/all.min.css";
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import AnimationProvider from "./components/AnimationProvider";
import { route } from "./route/router";

const App = () => {
  return (
    <>
      <AnimationProvider>
        <RouterProvider router={route} />
      </AnimationProvider>
    </>
  );
};

export default App;
