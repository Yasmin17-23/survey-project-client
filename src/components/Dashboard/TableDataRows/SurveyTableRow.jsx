import { format } from "date-fns";
import { useState } from "react";
import { Link } from "react-router";
import UpdateSurveyModal from "../../Modal/UpdateSurveyModal";

const SurveyTableRow = ({ survey, refetch }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  //modal handle

  return (
    <tr>
      <td>{survey?.title}</td>
      <td>{survey?.category}</td>
      <td>{format(new Date(survey?.deadline), "P")}</td>
      <td>
        <button
          onClick={() => setIsUpdateModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update survey</span>
        </button>
        <UpdateSurveyModal
          survey={survey}
          refetch={refetch}
          isUpdateModalOpen={isUpdateModalOpen}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
        />
      </td>
    </tr>
  );
};

export default SurveyTableRow;
