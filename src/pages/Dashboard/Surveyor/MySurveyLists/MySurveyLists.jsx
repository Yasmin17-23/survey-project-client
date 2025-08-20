import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet";
import SurveyTableRow from "../../../../components/Dashboard/TableDataRows/SurveyTableRow";


const MySurveyLists = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    
    
      //Fetch Survey Data using loggedIn user
      const { data: surveys = [], isLoading, refetch } = useQuery({
        queryKey: ["mysurvey-lists", user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure.get(
            `/mysurvey-lists/${user?.email}`
          );
          return data;
        },
      });
       console.log(surveys)
      if (isLoading) return <LoadingSpinner />;
  return (
    <>
     <Helmet>
        <title>My Survey Lists</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8 w-full px-2 md:px-6">
        <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            My Created All Survey List
          </h2>
          <p className="text-sm text-gray-400">
            By Survey Responses, I means the votes and comments that users have
            submitted for a survey
          </p>
        </div>
        <div className="min-w-full">
          <div className="overflow-x-auto w-full">
            <table className="table ">
              {/* head */}
              <thead className="bg-amber-100 uppercase">
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row  */}
                {surveys.map((survey) => (
                  <SurveyTableRow key={survey._id} survey={survey} refetch={refetch}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default MySurveyLists