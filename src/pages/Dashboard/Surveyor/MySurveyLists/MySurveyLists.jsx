import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import LoadingSpinner from "../../../../components/Shared/LoadingSpinner/LoadingSpinner";
import SurveyDataRow from "../../../../components/Dashboard/TableDataRows/SurveyDataRow";
import { Helmet } from "react-helmet";

const MySurveyLists = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //Fetch Survey Data
  const { data: surveys = [], isLoading } = useQuery({
    queryKey: ["surveys", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-surveylists/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>My Survey Lists</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            My Created Survey List
          </h2>
        </div>
        <div className="min-w-full">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
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
                  <SurveyDataRow key={survey._id} survey={survey} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySurveyLists;
