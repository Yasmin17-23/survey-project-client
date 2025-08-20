import { Link } from "react-router";
import logo from "../../../assets/images/logo.png";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import LinkItem from "../Menus/LinkItem";
import AdminItem from "../Menus/AdminItem";
import useRole from "../../../hooks/useRole";
import UserItem from "../Menus/UserItem";
import SurveyorItem from "../Menus/SurveyorItem";
import { FcHome } from "react-icons/fc";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [isActive, setIsActive] = useState(false);
  const [role] = useRole();

  //Sidebar toggle handler
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-rose-50 text-gray-800 flex justify-between md:hidden">
        <div className="pl-20 md:px-8"> 
          <div className="block cursor-pointer p-4 font-bold">
            <Link
              to="/"
              className="block md:flex justify-center items-center flex-wrap"
            >
              <img src="https://i.postimg.cc/Z5rgfmkf/logo.png" alt="" className="w-8 mr-2" />
              <h2 className="text-lg font-arvo text-blue-400 font-bold">
                Survey
                <span className="text-amber-700">Bangla</span>
              </h2>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-rose-200 cursor-pointer"
        >
          <HiOutlineBars3BottomLeft className="h-6 w-6  text-gray-900 " />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-72 space-y-6
        pl-20  md:pl-0 md:px-4 py-3 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div
              className="w-full hidden md:flex md:px-4 py-2 shadow-lg rounded-lg justify-center
             items-center bg-red-200 mx-auto"
            >
              <Link
                to="/"
                className="block md:flex justify-center items-center flex-wrap"
              >
                <img src={logo} alt="" className="w-8 mr-2" />
                <h2 className="text-lg font-arvo text-blue-400 font-bold">
                  Survey
                  <span className="text-amber-700">Bangla</span>
                </h2>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 my-4">
              <div className="mt-4">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-10 h-10 rounded-full border-2
                   border-amber-700"
                />
              </div>
              <h2 className="text-sm font-arvo text-fuchsia-700 mt-2">
                {user?.displayName}
              </h2>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            
            <hr className="text-amber-100" />
            {/*  Menu Items */}
            <nav>    
              <LinkItem
                label="Dashboard Home"
                address="/dashboard"
                icon={FcHome}
              />
              {(role === "user" || role === "pro-user") && <UserItem />}
              {role === "surveyor" && <SurveyorItem />}
              {role === "admin" && <AdminItem />}
            </nav>
          </div>
        </div>

        <div>
          <hr className="text-amber-100" />
           <LinkItem
                label="Profile"
                address="/dashboard/profile"
                icon={GrUserSettings}
              />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-rose-300  
             hover:text-gray-700 transition-colors duration-300 transform"
          >
            <AiOutlineLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
