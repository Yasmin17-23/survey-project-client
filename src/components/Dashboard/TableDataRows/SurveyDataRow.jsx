import { format } from "date-fns";
import PropTypes from "prop-types";
import { Link } from "react-router";

const SurveyDataRow = ({ survey }) => {
  const { _id, title, category, deadline } = survey;
  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>{format(new Date(deadline), "P")}</td>
      <th>
        <Link to={`${_id}`}>
          <span
            className="bg-gray-200 px-4 py-2 shadow-md rounded-xl text-gray-500 
        hover:bg-gray-800 hover:text-white transition duration-500 cursor-pointer "
          >
            Details
          </span>
        </Link>
      </th>
    </tr>
  );
};

SurveyDataRow.propTypes = {
  survey: PropTypes.object,
};

export default SurveyDataRow;
