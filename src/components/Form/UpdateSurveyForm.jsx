
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

const UpdateSurveyForm = ({
  startDate,
  setStartDate,
  handleUpdateSubmit,
  surveyData,
  setSurveyData,
}) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center text-gray-800 
      rounded-xl bg-gray-50"
    >
      <form onSubmit={handleUpdateSubmit} className="p-8 w-full">
        <div className="mb-5">
          <div className="space-y-1 text-md">
            <label htmlFor="title">Title</label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="title"
              id="title"
              type="text"
              placeholder="Title"
              value={surveyData?.title}
              onChange={(e) =>
                setSurveyData({ ...surveyData, title: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className=" mb-5">
          <div className="space-y-1 text-md">
            <label
              htmlFor="description"
              className="block text-gray-600 font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  
                     border border-rose-300 focus:outline-rose-500 text-sm"
              name="description"
              value={surveyData?.description}
              onChange={(e) =>
                setSurveyData({ ...surveyData, description: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <div className="space-y-2 text-md  mb-5">
          <label htmlFor="category" className="block text-gray-600">
            Category
          </label>
          <select
            required
            className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 
                   rounded-md border"
            name="category"
            value={surveyData?.category}
            onChange={(e) =>
                setSurveyData({ ...surveyData, category: e.target.value })
              }
          >
            <option>Select a category</option>
            <option>Education</option>
            <option>Customer Satisfaction</option>
            <option>Product Feedback</option>
            <option>Employee Feedback</option>
            <option>Social Issues</option>
            <option>Travel & Tourism</option>
            <option>Food & Nutrition</option>
            <option>Relationships & Family</option>
            <option>Event Planning</option>
          </select>
        </div>
        <div className="mb-5">
          <div className="space-y-1 text-md">
            <label
              htmlFor="deadline"
              className="block text-gray-600 font-semibold"
            >
              Deadline
            </label>
            {/* Date Picker Input Field */}
            <DatePicker
              className="border p-2 rounded-md px-4 py-3 border-rose-300 focus:outline-rose-500"
              selected={surveyData?.deadline ? new Date(surveyData?.deadline) : startDate}
              onChange={(date) => {
                setStartDate(date)
                setSurveyData({...surveyData, deadline: date})
              }}
              dateFormat="MM/dd/yyyy"
            />
          </div>
        </div>
        <div className="mb-5">
          <div className="space-y-1 text-md">
            <label
              htmlFor="questionTitle"
              className="block text-gray-600 font-semibold"
            >
              Question Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="questionTitle"
              id="questionTitle"
              type="text"
              placeholder="Question Title"
              value={surveyData?.questionTitle}
              onChange={(e) =>
                setSurveyData({ ...surveyData, questionTitle: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="mb-5">
          <div className="space-y-1 text-md">
            <label
              htmlFor="questionDescription"
              className="block text-gray-600 font-semibold"
            >
              Question Description
            </label>
            <textarea
              id="questionDescription"
              className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 
                      border border-rose-300 focus:outline-rose-500 text-sm"
              name="questionDescription"
              value={surveyData?.questionDescription}
              onChange={(e) =>
                setSurveyData({ ...surveyData, questionDescription: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium 
               text-white transition duration-200 rounded shadow-md bg-rose-400 uppercase"
        >
          Update
        </button>
      </form>
    </div>
  );
};

UpdateSurveyForm.propTypes = {
   surveyData: PropTypes.object,
   setSurveyData: PropTypes.func,
   startDate: PropTypes.number,
   setStartDate: PropTypes.func,
   handleUpdateSubmit: PropTypes.func,
}

export default UpdateSurveyForm;
