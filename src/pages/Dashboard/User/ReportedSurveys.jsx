import { Helmet } from "react-helmet"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import SurveyDataRow from "../../../components/Dashboard/TableDataRows/SurveyDataRow";
import { format } from "date-fns";


const ReportedSurveys = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: reports = [], isLoading } = useQuery({
      queryKey: ['my-reports', user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/my-reports/${user?.email}`)
        return data;
      }
  })
  if(isLoading) return <LoadingSpinner/>
  return (
     <div>
      <Helmet>
        <title>Reported Surveys Page</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            My Report On Survey
          </h2>
        </div>
         <div className="min-w-full">
                 <div className="overflow-x-auto">
                   <table className="table">
                     {/* head */}
                     <thead className="bg-rose-50 uppercase">
                       <tr>
                         <th>No.</th>
                         <th>Category</th>
                         <th>Title</th>
                         <th>Deadline</th>    
                       </tr>
                     </thead>
                     <tbody>
                       {/* row  */}
                      {
                         reports.map((survey, index) => (
                           <tr key={survey._id}>
                                 <td>{index + 1}</td>
                                 <td>{survey?.title}</td>
                                 <td>{survey?.category}</td>
                                 <td>{format(new Date(survey?.deadline), "P")}</td>
                               </tr>
                         ))
                      }
                     </tbody>
                   </table>
                 </div>
               </div>

        </div>
    </div>
  )
}

export default ReportedSurveys