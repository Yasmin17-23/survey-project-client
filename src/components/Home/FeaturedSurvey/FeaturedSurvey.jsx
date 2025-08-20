import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import Card from "./Card";

const FeaturedSurvey = () => {
    const axiosPublic = useAxiosPublic();
   

    const { data: votedSurveys = [], isLoading } = useQuery({
        queryKey: ['votedSurveys'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/surveys/vote`)
            return data;
        }
    })
    console.log(votedSurveys)
    if(isLoading) return <LoadingSpinner/>
  return (
    <div className="flex flex-col justify-center items-center my-14">
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="md:text-2xl font-arvo  font-bold text-amber-700">
          Featured Survey
        </h2>
        <p className="text-gray-600 text-sm">
          Here we display our most voted surveys !
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
        {votedSurveys.map(survey => (
            <Card key={survey._id} survey={survey}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSurvey;
