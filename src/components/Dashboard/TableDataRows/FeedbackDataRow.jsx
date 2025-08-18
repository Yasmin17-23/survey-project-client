import PropTypes from "prop-types"


const FeedbackDataRow = ({ feedback, index }) => {
  return (
     <tr>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            {index + 1}
          </td>
    
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            {feedback?.title}
          </td>
          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <span
              className={`px-5 py-1 rounded-full font-medium text-xs 
                ${
                  feedback?.status === "publish"
                    ? "bg-green-100 text-green-600"
                    : "bg-amber-100 text-amber-600"
                }`}
            >
              {feedback?.status}
            </span>
          </td>
    
         <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            {feedback?.feedback}
          </td>
        </tr>
  )
}

FeedbackDataRow.propTypes = {
    feedback: PropTypes.object,
    index: PropTypes.number,
}

export default FeedbackDataRow