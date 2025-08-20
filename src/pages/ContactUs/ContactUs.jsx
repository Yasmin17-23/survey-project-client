import { Helmet } from "react-helmet";
import { BsEnvelope } from "react-icons/bs";
import { MdApps, MdPhone } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>SurveyBangla || About Us</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-amber-700">
            Contact Us
          </h2>
          <p className="text-sm text-gray-400">
            Here You Find All Information For Our Contact Details
          </p>
        </div>
      </div>

      <div className="w-3/4 mx-auto">
        <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
          <form>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="block w-full px-5 py-2.5 mt-2
                             text-gray-700 placeholder-gray-400 bg-white border border-gray-200 
                             rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300
                              dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400
                               focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className=" px-6 py-3 mt-4 text-sm font-medium tracking-wide 
            text-white capitalize transition-colors duration-300 transform bg-rose-300 rounded-lg
             hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 
              focus:ring-opacity-50">
              Send message
            </button>
          </form>
        </div>
      </div>
      
        <div className="flex flex-wrap justify-center items-center my-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <span className="inline-block p-3 text-rose-500 rounded-full bg-rose-100/80 
              dark:bg-gray-800">
                <BsEnvelope/>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                survey@demo.com
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-rose-500 rounded-full bg-rose-100/80
               dark:bg-gray-800">
                <MdApps/>
               </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Location
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                Gulshan, Dhaka, Bangladesh
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-rose-500 rounded-full bg-rose-100/80
               dark:bg-gray-800">
                <MdPhone/>
               </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +1 (555) 000-0000
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ContactUs;
