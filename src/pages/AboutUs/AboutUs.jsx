import { Helmet } from "react-helmet";
import ContentAbout from "./ContentAbout";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>SurveyBangla || About Us</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-amber-700">
            About Us
          </h2>
          <p className="text-sm text-gray-400">
            Connecting Insights to Action - Learn More About Who We Are and Why
            We Listen.
          </p>
        </div>
      </div>
      <ContentAbout />
      <div>
        <div className=" px-6 py-8 mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our Executive Team
          </h2>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://i.postimg.cc/ncd29DpY/about-img-1.jpg"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-amber-700 uppercase dark:text-gray-200">
                  Ahmed Omer
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  CEO
                </span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://i.postimg.cc/gJXjs1Z2/about-img-2.jpg"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-amber-700 uppercase  dark:text-gray-200">
                  Janifer Rahman
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  Co-founder
                </span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://i.postimg.cc/13dZBXcD/about-img-3.jpg"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-amber-700 uppercase  dark:text-gray-200">
                  Steve Ben
                </h3>
                <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                  HR Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-amber-700 w-3/4 mx-auto my-4"/>
      <div className="flex flex-col  justify-center items-center mb-8">
        <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="md:text-2xl font-arvo  font-bold text-amber-700">
            About Our
          </h2>      
        </div>
        <div className="flex  flex-wrap flex-col md:flex-row justify-center items-center gap-8">
          <div className="stats shadow">
          <div className="stat">
            <div className="stat-title md:text-lg font-semibold text-amber-800">Total Surveys</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title md:text-lg font-semibold text-amber-800">Total Votes</div>
            <div className="stat-value">776</div>
            <div className="stat-desc">45% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title md:text-lg font-semibold text-amber-800">Reported Surveys</div>
            <div className="stat-value">200+</div>
            <div className="stat-desc">37% more than last month</div>
          </div>
        </div>
         <div className="stats shadow">
          <div className="stat">
            <div className="stat-title md:text-lg font-semibold text-amber-800">Perticipated Users</div>
            <div className="stat-value">9000</div>
            <div className="stat-desc">57% more than last month</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
