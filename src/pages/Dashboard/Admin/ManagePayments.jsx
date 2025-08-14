import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet";
import PaymentDataRow from "../../../components/Dashboard/TableDataRows/PaymentDataRow";

const ManagePayments = () => {
  const axiosSecure = useAxiosSecure();

  //Fetch all payments
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payments`);
      return data;
    },
  });
  console.log(payments)
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>Manage Payments</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
            Manage Payments & Reponses
          </h2>
          <p className="font-semibold text-gray-600">
            All Payment and Survey Responses show here!
          </p>
        </div>
        <div className="flex flex-col mt-6 min-w-full">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-1 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-rose-50 dark:bg-rose-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left 
                                        rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                     Email
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Transaction Id
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {/* Payments row */}
                    {
                        payments.map(payment => (
                            <PaymentDataRow key={payment._id} payment={payment} />
                        ))
                    }
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

export default ManagePayments;
