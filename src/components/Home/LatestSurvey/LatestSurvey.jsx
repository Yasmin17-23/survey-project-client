import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import SurveyCard from "./SurveyCard";
import { useState } from "react";


const LatestSurvey = () => {
    const axiosPublic = useAxiosPublic();
    const [dataItem, setDataItem] = useState(6)
    

    const { data: surveys = [], isLoading } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/surveys`)
            return data;
        }
    })
    
    if(isLoading) return <LoadingSpinner/>
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="md:text-2xl font-arvo  font-bold text-amber-700">
         Latest Survey
        </h2>
        <p className="text-gray-600 text-sm">Here we display our latest created survey report!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
         {
            surveys.slice(0, dataItem).map(survey => (
                <SurveyCard key={survey._id} survey={survey}/>
            ))
         }
      </div>
    </div>
  );
};

export default LatestSurvey;
