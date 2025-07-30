import { Link, NavLink } from "react-router";
import logo from "../../../assets/images/logo.png";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { BsGraphUp } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";


const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setIsActive] = useState(false);

  //Sidebar toggle handler
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-rose-50 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/" className="block md:flex justify-center items-center flex-wrap">     
              <img src={logo} alt="" className="w-8 mr-2" />
              <h2 className="text-lg font-arvo text-blue-400 font-bold">
                Survey
                <span className="text-amber-700">Bangla</span>
              </h2>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-rose-200">
      
          <HiOutlineBars3BottomLeft className="h-6 w-6  text-gray-900 " />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center
             items-center bg-red-200 mx-auto">
              <Link to="/" className="block md:flex justify-center items-center flex-wrap">
                <img src={logo} alt="" className="w-8 mr-2" />
                <h2 className="text-lg font-arvo text-blue-400 font-bold">
                  Survey
                  <span className="text-amber-700">Bangla</span>
                </h2>
              </Link>
            </div>
            <div>
              <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-rose-300   hover:text-gray-700 ${
                isActive ? "bg-rose-100  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <GrUserSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}
            <hr />
            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-rose-300   hover:text-gray-700 ${
                    isActive ? "bg-rose-100  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <BsGraphUp className="w-5 h-5" />

                <span className="mx-4 font-medium">Common</span>
              </NavLink>

              {/* Add Room */}
              <NavLink
                to="create-survey"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform 
                 hover:bg-rose-300   hover:text-gray-700 ${
                    isActive ? "bg-rose-100  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdPostAdd className="w-5 h-5" />

                <span className="mx-4 font-medium">Create Survey</span>
              </NavLink>
              {/* My Listing */}
              <NavLink
                to="my-surveylists"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform 
                 hover:bg-rose-300   hover:text-gray-700 ${
                    isActive ? "bg-rose-100  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <BsFileEarmarkPlusFill className="w-5 h-5" />

                <span className="mx-4 font-medium">My Survey Lists</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          
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
