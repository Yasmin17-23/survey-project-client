import { useNavigate, useParams } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaPenClip } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import useRole from "../../hooks/useRole";
import toast from "react-hot-toast";
import ReportPieChart from "../../components/Dashboard/Chart/ReportPieChart";

const SurveyDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [vote, setVote] = useState("");
  const navigate = useNavigate();
  const [role] = useRole();
  const [showResult, setShowResult] = useState(false);

  //Fetch single survey data;
  const { data: survey = {}, isLoading, refetch } = useQuery({
    queryKey: ["survey", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/survey/${id}`);

      return data;
    },
  });

  //For vote count
  const { mutateAsync } = useMutation({
    mutationFn: async (vote) => {
      const { data } = await axiosSecure.put(`/vote-count/${id}`, vote);
      return data;
    },

    onSuccess: () => {
      toast.success("Vote Submitted Successfully");   
      setShowResult(true)
      refetch()
      
    },
  });

  //handle vote submit button
  const handleVoteSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return navigate("/login");
    }

    const form = e.target;
    const vote = form.vote.value;
    const comment = form.comment?.value || "";

    let addComment = "";
    if (role === "pro-user") {
      addComment = comment;
    }

    const voterData = {
      vote,
      comment: addComment,
      email: user?.email,
      name: user?.displayName,
    };

    try {
      await mutateAsync(voterData);
      form.reset();
      setVote("");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  //For report
  const { mutateAsync: reportMutateAsync } = useMutation({
    mutationFn: async (reports) => {
      const { data } = await axiosSecure.put(`/survey-reports/${id}`, reports);
      return data;
    },
    onSuccess: () => {
      console.log("Report Submitted");
      toast.success("Report Submitted Successfully!!");
    },
  });

  //handle survey report
  const handleReport = async () => {
    if (!user) {
      return navigate("/login");
    }
    const reportInfo = {
      ...survey,
      report_user: {
        role,
        email: user?.email,
        name: user?.displayName,
      },
    };
    try {
      await reportMutateAsync(reportInfo);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const isDeadlinePassed = new Date(survey.deadline) < new Date();
  
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <Helmet>
        <title>Survey Details Information</title>
      </Helmet>
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
          <p className="my-4 text-sm text-gray-600 max-w-4xl">
            {survey.description}
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-gray-600">{survey.questionTitle}</h2>
        <p>{survey?.questionDescription}</p>
      </div>

      <div className="my-3 border border-amber-100  w-3/4 p-4 rounded-md">
        <p className="text-red-700 font-semibold">
          Please login to vote this survey!!
        </p>
        <form onSubmit={handleVoteSubmit}>
          <div className="flex  justify-between">
            <div className="flex flex-col justify-center">
              <div className="flex gap-4">
                <div>
                  <label htmlFor="yesVote"></label>
                  <input
                    type="radio"
                    name="vote"
                    id="yes"
                    value="yes"
                    checked={vote === "yes"}
                    className="mr-1"
                    onChange={(e) => setVote(e.target.value)}
                  />
                  <span className="text-gray-600 font-semibold">Yes</span>
                </div>
                <div>
                  <label htmlFor="noVote"></label>
                  <input
                    type="radio"
                    name="vote"
                    id="no"
                    value="no"
                    className="mr-1"
                    checked={vote === "no"}
                    onChange={(e) => setVote(e.target.value)}
                  />
                  <span className="text-gray-600 font-semibold">No</span>
                </div>
              </div>
              <div>
                {user && role === "pro-user" && (
                  <div className="my-4">
                    <label
                      htmlFor="comment"
                      className="text-sm text-gray-500 font-bold mb-2"
                    >
                      Comment Below:{" "}
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none"
                      name="comment"
                      placeholder="Write your opinion"
                    ></textarea>
                  </div>
                )}
              </div>
              <div className="my-2">
                <button
                  type="submit"
                  className="bg-green-800 text-white  text-sm px-3 py-1 rounded-sm 
         uppercase cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="text-center my-5">
        <button
          onClick={handleReport}
          type="submit"
          className="bg-sky-800 text-white  text-sm px-3 py-1 rounded-sm 
         uppercase cursor-pointer"
        >
          Report
        </button>
      </div>
      {(isDeadlinePassed || showResult) && (
          <div className="my-4">
            <h3 className="text-2xl font-bold text-gray-700">Survey Report</h3>
            <ReportPieChart yesCount={survey?.yesCount} noCount={survey?.noCount} />
          </div>
        )}
    </div>
  );
};

export default SurveyDetails;
