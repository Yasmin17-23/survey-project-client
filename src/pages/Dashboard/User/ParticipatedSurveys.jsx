import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ParticipatedDataRow from "../../../components/Dashboard/TableDataRows/ParticipatedDataRow";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";

const ParticipatedSurveys = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: surveys = [], isLoading } = useQuery({
        queryKey: ['participatedSurvey', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/surveys/participated/${user?.email}`)
            return data;
        }
    })
   
    if(isLoading) return <LoadingSpinner/>
  return (
    <div>
      <Helmet>
        <title>Participated Surveys</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            Participation Survey Activity
          </h2>
        </div>
         <div className="min-w-full">
                 <div className="overflow-x-auto">
                   <table className="table">
                     {/* head */}
                     <thead className="bg-rose-50 uppercase">
                       <tr>
                         <th>No.</th>
                         <th>Title</th>
                         <th>Question</th>
                         <th>Vote</th>
                       </tr>
                     </thead>
                     <tbody>
                       {/* row  */}
                       {surveys.map((survey, index) => (
                          <ParticipatedDataRow key={survey._id} index={index} survey={survey} />
                       ))}
                     </tbody>
                   </table>
                 </div>
               </div>

        </div>
    </div>
  );
};

export default ParticipatedSurveys;
