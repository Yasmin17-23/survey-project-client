import { format } from "date-fns";
import { Link } from "react-router";

const SurveyCardItem = ({ survey }) => {
  return (
    <div
      className="w-full max-w-md px-4 py-3 bg-white rounded-md shadow-md
       dark:bg-gray-800 transition-transform duration-500 ease-in-out hover:shadow-md hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-400">
          Deadline: {format(new Date(survey?.deadline), "P")}
        </span>
      </div>

      <div>
        <h1 className="mt-2 md:text-lg font-semibold text-gray-800 dark:text-white">
          {survey?.title}
        </h1>
      </div>
      <div className="flex justify-between items-center my-3 gap-3">
        <h1 className="mt-2 text-sm font-semibold text-gray-800 dark:text-white">
          {survey?.description.substring(0, 80)}.....
        </h1>
        <div className="mt-6">
          <Link
            to={`/survey/${survey._id}`}
            className="relative inline-flex items-center justify-center p-4 px-3 py-1 overflow-hidden 
            font-medium text-indigo-600 transition duration-400 ease-out border-1
             border-rose-300 rounded-full shadow-sm group"
          >
            <span
              className="absolute inset-0 flex items-center justify-center w-full
             h-full text-white duration-400 -translate-x-full
              bg-rose-300 group-hover:translate-x-0 ease"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span
              className="absolute flex items-center justify-center w-full h-full text-rose-400 
            transition-all duration-400 transform group-hover:translate-x-full ease text-sm"
            >
              Details
            </span>
            <span className="relative invisible">Details</span>
          </Link>
        </div>
      </div>

      <div className="bg-rose-200 border border-rose-700 rounded-full px-3 py-1
       text-rose-700 font-semibold md:w-1/3 text-center">
        <h2 className="text-md">
          <span>Vote: </span>
          {survey?.voteCount}
        </h2>
      </div>
    </div>
  );
};

export default SurveyCardItem;
