import { Helmet } from "react-helmet";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import SurveyDataRow from "../../../../components/Dashboard/TableDataRows/SurveyDataRow";

const ResponsesSurvey = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //Fetch Survey Data using loggedIn user
  const { data: surveys = [], isLoading } = useQuery({
    queryKey: ["my-surveylists", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/responses-surveylist/${user?.email}`
      );

      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>Responses Survey Page</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            Individual Responses Survey
          </h2>
          <p className="text-sm text-gray-400">
            By Survey Responses, I means the votes and comments that users have
            submitted for a survey
          </p>
        </div>
        <div className="min-w-full">
          <div className="overflow-x-auto">
            <table className="table">
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

export default ResponsesSurvey;
