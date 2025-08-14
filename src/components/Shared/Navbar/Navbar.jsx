import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import profileImg from "../../../assets/images/profile-img1.jpg";
import { Link } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4">
        <div className="max-w-8xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link
              to="/"
              className="block md:flex justify-center items-center flex-wrap"
            >
              <img src={logo} alt="" className="w-8  mr-2" />
              <h2 className="text-lg font-arvo text-blue-400 font-bold">
                Survey
                <span className="text-amber-700">Bangla</span>
              </h2>
            </Link>
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Become A Host btn */}
                <div className="flex  justify-between items-center">
                  <Link
                    to="/about-us"
                    className="block p-2 md:px-4 md:py-3 hover:bg-lime-100 transition font-semibold 
                    hover:rounded-4xl space-x-5 hover:text-amber-950"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block p-2 md:px-4 md:py-3 hover:bg-lime-100 transition 
                    font-semibold hover:rounded-4xl space-x-5 hover:text-amber-950"
                  >
                    Contact Us
                  </Link>
                   <Link
                    to="/pricing"
                    className="block p-2  md:px-4 md:py-3 hover:bg-lime-100 transition 
                    font-semibold hover:rounded-4xl space-x-5 hover:text-amber-950"
                  >
                    Pro User
                  </Link>
                </div>

                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-3 border-[1px] border-neutral-200 flex flex-row 
                  items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : profileImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div
                  className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white 
                overflow-hidden right-0 top-14 text-sm"
                >
                  <div className="flex flex-col cursor-pointer p-2">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-lime-100 transition 
                      font-semibold hover:text-amber-950 hover:rounded-4xl gap-4"
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-3 hover:bg-lime-100 transition 
                       font-semibold hover:text-amber-950 hover:rounded-4xl"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-lime-100 transition font-semibold cursor-pointer
                          hover:text-amber-950 hover:rounded-4xl"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-lime-100 transition font-semibold cursor-pointer
                          hover:text-amber-950 hover:rounded-4xl"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-lime-100 transition font-semibold cursor-pointer
                          hover:text-amber-950 hover:rounded-4xl"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
