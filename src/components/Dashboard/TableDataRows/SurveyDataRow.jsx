import { format } from "date-fns";
import PropTypes from "prop-types";

const SurveyDataRow = ({ survey, refetch }) => {
  const { title, category, deadline } = survey;
  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>{format(new Date(deadline), "P")}</td>
      <th>
        <button
          class="relative inline-flex items-center justify-center p-4 md:px-8 py-3 overflow-hidden 
          font-medium text-indigo-600 transition duration-500 ease-out rounded-full 
          shadow-xl group hover:ring-1 hover:ring-blue-100"
        >
          <span
            class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-300 via-purple-400
           to-rose-700"
          ></span>
          <span
            class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 
          origin-bottom-left transform rotate-45 translate-x-24 bg-rose-300 rounded-full opacity-30 
          group-hover:rotate-90 ease"
          ></span>
          <span class="relative text-white">Details</span>
        </button>
      </th>
    </tr>
  );
};

SurveyDataRow.propTypes = {
    survey: PropTypes.object,
    refetch: PropTypes.func,
}

export default SurveyDataRow;
