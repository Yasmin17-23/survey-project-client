import { Helmet } from "react-helmet";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import SurveyCardItem from "./SurveyCardItem";
import { useEffect, useState } from "react";


const Survey = () => {
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState('');
  const [displayCategory, setDisplayCategory] = useState([])

  const { data: surveys = [], isLoading } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/surveys`)
            return data;
        }
    })
  
    useEffect(() => {     
        if(!filter){
           setDisplayCategory(surveys)
        }
        else {
           setDisplayCategory(
            (surveys.filter((survey) => survey?.category?.toLowerCase() === filter.toLowerCase()))
           )
        }
      }, [filter, surveys])
        
      const handleCategory = e => {
        const filterCategory = e.target.value;
        setFilter(filterCategory)
    
    }
   console.log(surveys)
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>All Survey Page</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="flex flex-col  justify-center items-center mb-8">
          <h2 className="md:text-3xl font-arvo  font-bold text-amber-700">
            All Survey
          </h2>
          <p className="text-sm text-gray-400">
            Here we display our latest created survey report!
          </p>
        </div>
      </div>
         <div className="flex justify-end items-end">
           <div>
            <select
              name='category'
              id='category'
              className='border p-3 rounded-md border-rose-200 text-gray-500 text-sm outline-none'
              value={filter}
              onChange={handleCategory}
              
            > 
            <option value='' className="text-gray-500 text-sm ">
                Select a category
              </option>
              <option value='education' className="text-gray-500 text-sm ">Education</option>
              <option value='customer satisfaction' className="text-gray-500 text-sm ">Customer Satisfaction</option>
              <option value='product feedback' className="text-gray-500 text-sm ">Product Feedback</option>
              <option value='employee feedback' className="text-gray-500 text-sm ">Employee Feedback</option>
              <option value='social issues' className="text-gray-500 text-sm ">Social Issues</option>
              <option value='travel & tourism' className="text-gray-500 text-sm ">Travel & Tourism</option>
              <option value='food & nutrition' className="text-gray-500 text-sm ">Food & Nutrition</option>
              <option value='relationships & family' className="text-gray-500 text-sm ">Relationships & Family</option>
              <option value='event planning' className="text-gray-500 text-sm ">Event Planning</option>
              
            </select>
          </div>
        </div>
      <div className="flex flex-col justify-center items-center my-16">
     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {displayCategory.map((survey) => (           
            <SurveyCardItem key={survey._id} survey={survey} />
          ))
        }
        </div>
      </div>
    </>
  );
};

export default Survey;
