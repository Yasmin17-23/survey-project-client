import { format } from "date-fns";
import { useState } from "react";
import UpdateStatusModal from "../../Modal/UpdateStatusModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const AllSurveyRow = ({ survey, index, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (status) => {
      const { data } = await axiosSecure.patch(
        `/survey/updateStatus/${survey?._id}`,
        status
      );
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Survey Status Updated");
      setIsModalOpen(false);
    },
  });

  //status modal handler
  const statusModalHandler = async (selected) => {

    const updateStatus = {
      status: selected,
    };
    try {
      await mutateAsync(updateStatus);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {index + 1}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {survey?.title}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {survey?.category}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {format(new Date(survey?.deadline), "P")}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <span
          className={`px-5 py-1 rounded-full font-medium text-xs 
            ${
              survey?.status === "publish"
                ? "bg-green-100 text-green-600"
                : "bg-amber-100 text-amber-600"
            }`}
        >
          {survey?.status}
        </span>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 
                                                      2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 
                                                      4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 
                                                      2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 
                                                      015.25 6H10"
              />
            </svg>
          </button>
          {/* Update Survey status Modal */}
          <UpdateStatusModal
            survey={survey}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            statusModalHandler={statusModalHandler}
          />
        </div>
      </td>
    </tr>
  );
};

AllSurveyRow.propTypes = {
  survey: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};

export default AllSurveyRow;
