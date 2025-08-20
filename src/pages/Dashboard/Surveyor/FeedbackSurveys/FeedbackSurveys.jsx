import { Helmet } from "react-helmet";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../components/Shared/LoadingSpinner/LoadingSpinner";
import FeedbackDataRow from "../../../../components/Dashboard/TableDataRows/FeedbackDataRow";

const FeedbackSurveys = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    //Fetch feedback message data
    const { data: feedbacks = [], isLoading } = useQuery({
       queryKey: ['feedbacks', user?.email],
       queryFn: async () => {
          const { data } = await axiosSecure.get(`/feedback-survey/${user?.email}`)

          return data;
       }
    })
    
    if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>Feedback Survey Page</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8  ">
        <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            Feedback Survey by Admin
          </h2>
          <p className="text-sm text-gray-400">Here show all feedback for surveys by admin our website!</p>
        </div>
        <div className="min-w-full ">
          <div className="overflow-x-auto ">
            <table className="table overflow-x-hidden">
              {/* head */}
              <thead className="bg-amber-500 uppercase text-white">
                <tr>
                  <th>No. </th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {/* row  */}
                {
                   feedbacks.map((feedback, index) => (
                      <FeedbackDataRow key={feedback._id} index={index} feedback={feedback}/>
                   ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackSurveys;
