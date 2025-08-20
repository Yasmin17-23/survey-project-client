import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="px-8 md:px-0">
        <Navbar />
      </div>
      
      <div className="pt-24 mx-auto max-w-7xl min-h-[calc(100vh-80px)] xl:px-16 md:px-10 sm:px-2 px-4">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;


