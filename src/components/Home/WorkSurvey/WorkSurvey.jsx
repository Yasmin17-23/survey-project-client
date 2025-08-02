import { PiNotepadFill } from "react-icons/pi";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { RiBarChartGroupedLine } from "react-icons/ri";

const WorkSurvey = () => {
  return (
    <div className="flex flex-col justify-center items-center  my-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="md:text-2xl font-arvo  font-bold text-amber-700">
          How Our Survey Workflow!
        </h2>
        <p className="text-gray-600 text-sm">
          {" "}
          Create your survey in minutes, share with your audience, and watch the
          results come in.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8 ">
        <div className="text-center">
          <div className="max-w-xs overflow-hidden bg-white rounded-lg  
          dark:bg-gray-800 border border-gray-400">
            <div className="px-4 py-2 my-4">
              <span
                className="text-xl font-bold bg-amber-900 p-3 text-white uppercase 
            dark:text-white rounded-md"
              >
                1
              </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-2 bg-gray-300">
              <div className="flex justify-between items-center mb-4">
                <PiNotepadFill className="text-xl text-rose-300 mr-2" />
                <h1 className="text-lg font-bold text-white">
                  Create A Survey
                </h1>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 mb-3 ">
                Easily create customized surveys with titles, categories,
                questions, and deadlines using our intuitive form builder.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="max-w-xs overflow-hidden bg-white rounded-lg  dark:bg-gray-800
          border border-gray-400">
            <div className="px-4 py-2 my-4">
              <span
                className="text-xl font-bold bg-amber-900 p-3 text-white uppercase 
            dark:text-white rounded-md"
              >
                2
              </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-2 bg-gray-300">
              <div className="flex justify-between items-center mb-4">
                <BsFillCollectionPlayFill className="text-xl text-rose-300 mr-2"/>
                <h1 className="text-lg font-bold text-white">
                   Share & Collect Responses
                </h1>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 mb-3">
                Share our survey via a link. Participants can easily respond with just a few clicks, no sign-up required.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="max-w-xs overflow-hidden bg-white rounded-lg  dark:bg-gray-800
          border border-gray-400">
            <div className="px-4 py-2 my-4">
              <span
                className="text-xl font-bold bg-amber-900 p-3 text-white uppercase 
            dark:text-white rounded-md"
              >
                3
              </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-2 bg-gray-300">
              <div className="flex justify-between items-center mb-4">
                <RiBarChartGroupedLine className="text-xl text-rose-300 mr-2" />
                <h1 className="text-lg font-bold text-white">
                 View & Show Results
                </h1>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 mb-3">
                Track your survey’s performance in real time with visual data analytics and 
                export options. Finaly show the chart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSurvey;
