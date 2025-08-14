import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet";
import AllSurveyRow from "../../../components/Dashboard/TableDataRows/AllSurveyRow";

const ManageSurveys = () => {
  const axiosSecure = useAxiosSecure();

  //Fetch all surveys
  const {
    data: surveys = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["surveys"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/surveys`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>Manage All Survey</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            Manage All Survey Information
          </h2>
          <p className="font-semibold text-gray-600">
            All survey Info & Survey status show here
          </p>
        </div>
        <div className="flex flex-col mt-6 min-w-full">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-3 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-rose-50 dark:bg-rose-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left 
                                        rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Deadline
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {/* Surveys row */}
                    {surveys.map((survey, index) => (
                      <AllSurveyRow
                        key={survey._id}
                        survey={survey}
                        index={index}
                        refetch={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageSurveys;
