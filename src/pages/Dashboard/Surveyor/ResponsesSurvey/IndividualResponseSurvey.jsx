import { useParams } from "react-router";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet";
import { FaPenClip } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import SurveyBarChart from "../../../../components/Dashboard/Chart/SurveyBarChart";

const IndividualResponseSurvey = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [showChart, setShowChart] = useState(false);

  //Fetch single survey data;
  const { data: survey = {}, isLoading } = useQuery({
    queryKey: ["survey", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/survey/${id}`);
      return data;
    },
  });

  console.log(survey);
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>Individual Responses Survey Details </title>
      </Helmet>
      <div>
        <div className="my-4">
          <div>
            <div className="flex items-center jusfify-center gap-2">
              <h2 className="md:text-3xl font-bold text-gray-600">
                {survey.title}
              </h2>
              <FaPenClip className="text-xl font-bold text-amber-700" />
            </div>
            <p className="my-2 text-semibold">
              <span className="font-bold">Category: </span>
              {survey.category}
            </p>
            <div className="flex items-center jusfify-center gap-2">
              <div>
                <p className="text-semibold">
                  <span className="font-bold text-rose-400">Deadline: </span>
                  {new Date(survey.deadline).toLocaleDateString()}
                </p>
              </div>
              <SlCalender className="text-red-800" />
            </div>
            <p className="my-4 text-sm text-gray-600 max-w-4xl ">
              <span className="font-bold text-rose-300 text-lg underline mr-5">
                Description:{" "}
              </span>
              {survey.description}
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-gray-600">
            <span className="font-bold">Question: </span>
            {survey.questionTitle}
          </h2>
          <p className="my-3">{survey?.questionDescription}</p>
        </div>
        <div className="stats shadow bg-gray-300">
          <div className="stat">
            <div className="stat-title md:text-xl font-bold">Total Vote</div>
            <div className="stat-value text-center text-amber-800">
              {survey?.voteCount}
            </div>
          </div>
        </div>
        <div className="my-5">
          <button onClick={() => setShowChart((prev) => !prev)}
          className="px-3 py-2 bg-amber-600 rounded-md text-white font-medium transition 
          duration-300 cursor-pointer">
              { showChart ? "Show Chart" : "Show Table" }
          </button>
       
       <div>
         {showChart ? (
          <div>
            <SurveyBarChart
              yesCount={survey.yesCount}
              noCount={survey.noCount}
            />
          </div>
        ) : (
          <div className="my-7  w-3/4">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-amber-100 uppercase">
                  <tr>
                    <th>Serial No.</th>
                    <th>User Email</th>
                    <th>User Name</th>
                    <th>Vote</th>
                  </tr>
                </thead>
                <tbody>
                  {survey?.voteRecord?.map((record, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{record?.email}</td>
                      <td>{record?.name}</td>
                      <td
                        className={`inline-block px-4 py-2 mr-1 rounded text-xs mt-3 uppercase
                 font-semibold ${
                   record?.vote === "yes"
                     ? "bg-green-100 text-green-600"
                     : "bg-red-100 text-red-600"
                 }`}
                      >
                        {record?.vote}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
       </div>
        </div>
      </div>
    </>
  );
};

export default IndividualResponseSurvey;
