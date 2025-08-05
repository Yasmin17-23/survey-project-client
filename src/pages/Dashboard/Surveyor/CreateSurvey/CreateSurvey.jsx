import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";



const CreateSurvey = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: async surveyData => {
      const { data } = await axiosSecure.post(`/survey`, surveyData)
      return data;
    },
    onSuccess: () => {
      console.log('Survey Create Successfully');
      toast.success('Survey Create Successfully!');
      navigate('/dashboard/surveyor/surveys')
    }
  })

  const handleSurveySubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const deadline = startDate;
    const questionTitle = form.questionTitle.value;
    const questionDescription = form.questionDescription.value;
    
    const surveyor = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
    }

    try{
      const surveyData = {
        title,
        description,
        category,
        deadline,
        surveyor,
        questionTitle,
        questionDescription  
      }
      console.table(surveyData);

      //create request to server
      await mutateAsync(surveyData)

    } catch(err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  return (
    <div>
      <Helmet>
        <title>Survey Creation Page</title>
      </Helmet>
                
      <div className="block text-gray-600 font-semibold my-5">
        <h2 className="md:text-3xl font-semibold text-rose-800 md:ml-8">
          Survey Creation Form
        </h2>
      </div>
      <div className=''>
        <form onSubmit={handleSurveySubmit} className="p-8">
          <div className="w-3/4 mb-5">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>
          </div>
          <div className="w-3/4 mb-5">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="description"
                className="block text-gray-600 font-semibold"
              >
                Description
              </label>
              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="space-y-2 text-sm w-3/4 mb-5">
            <label htmlFor="category" className="block text-gray-600">
              Category
            </label>
            <select
              required
              className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 
              rounded-md border"
              name="category"
            >
              <option >
                Select a category
              </option>
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
          <div className="w-3/4 mb-5">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="deadline"
                className="block text-gray-600 font-semibold"
              >
               Deadline
              </label>
               {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md px-4 py-3 border-rose-300 focus:outline-rose-500'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
          </div>
           <div className="w-3/4 mb-5">
            <div className="space-y-1 text-sm">
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
                required
              />
            </div>
          </div>
           <div className="w-3/4 mb-5">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="questionDescription"
                className="block text-gray-600 font-semibold"
              >
                Question Description
              </label>
               <textarea
                id="questionDescription"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="questionDescription"
              ></textarea>
            </div>
          </div>
           <button
           type='submit'
          className='w-3/4 p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
         Create & Save
        </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSurvey;
