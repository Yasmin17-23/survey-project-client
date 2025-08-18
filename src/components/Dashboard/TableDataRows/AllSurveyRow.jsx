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
  const [feedback, setFeedback] = useState("");

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
    if(!feedback.trim()){
       toast.error('Feedback Message must be required..')
       return;
    }

    const updateStatus = {
      status: selected,
      feedback: feedback || null,
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
            className="text-rose-400 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
           <span>Unpublish</span>
          </button>
          {/* Update Survey status Modal */}
          <UpdateStatusModal
            survey={survey}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            statusModalHandler={statusModalHandler}
            setFeedback={setFeedback}
            feedback={feedback}
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
