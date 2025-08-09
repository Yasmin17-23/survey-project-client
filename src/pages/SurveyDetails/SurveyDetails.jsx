import { useNavigate, useParams } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaPenClip } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import useRole from "../../hooks/useRole";
import toast from "react-hot-toast";


const SurveyDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [vote, setVote] = useState("");
  const navigate = useNavigate();
  const [role] = useRole();
  console.log(role)


  //Fetch single survey data;
  const { data: survey = {}, isLoading } = useQuery({
    queryKey: ["survey", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/survey/${id}`);

      return data;
    },
  });
  
  
  
  const { mutateAsync } = useMutation({
    mutationFn: async vote => {
      const { data } = await axiosSecure.put(`/vote-count/${id}`,
        vote
      )
      return data;
    }
  })
  
  
  //handle vote submit button
  const handleVoteSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const vote = form.vote.value;
    const voterData = {
       vote,
       email: user?.email,
       name: user?.displayName,
    }

    if(!user) {
      return navigate('/login')
    } 

    if(user?.role !== 'pro-user'){
        toast.error('Only pro-user can add comments!')
        return;
    }
    try{
        
      await mutateAsync(voterData)
    } catch(err) {
      console.log(err)
    }  
  }
  if(isLoading) return <LoadingSpinner />
  return (
    <div>
      <Helmet>
        <title>Survey Details Information</title>
      </Helmet>
      <div className="my-4">
        <div>
          <div className="flex items-center jusfify-center gap-2">
            <h2 className="md:text-3xl font-bold text-gray-600">{survey.title}</h2>
            <FaPenClip className="text-xl font-bold text-amber-700"/>
        </div>
        <p className="my-2 text-semibold"><span className="font-bold">Category: </span>{survey.category}</p>
        <div className="flex items-center jusfify-center gap-2">
           <div>
            <p className="text-semibold"><span className="font-bold text-rose-400">Deadline: </span>{new Date(survey.deadline).
                 toLocaleDateString()}</p>
           </div>
            <SlCalender className="text-red-800"/>
        </div>
        <p className="my-4 text-sm text-gray-600 max-w-4xl">{survey.description}</p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-gray-600">{survey.questionTitle}</h2>
        <p>{survey?.questionDescription}</p>
      </div>
     
       <div className="my-3 border border-amber-100 w-3/4 p-4 rounded-md">
        <p className="text-red-700 font-semibold">Please login to vote this survey!!</p>
       <form onSubmit={handleVoteSubmit}>
         <div className="flex  justify-between">
          <div className="flex gap-4">
          <div>
           <label htmlFor="yesVote"></label>
           <input type="radio" name="vote" id="yes" value="yes"
           checked={vote === 'yes'} 
           className="mr-1"
           onChange={(e) => setVote(e.target.value)}/>
           <span className="text-gray-600 font-semibold">Yes</span>
        </div>
         <div>
           <label htmlFor="yesVote"></label>
           <input type="radio" name="vote" id="no" value="no" 
           className="mr-1" checked={vote === 'no'} 
           onChange={(e) => setVote(e.target.value)}/>
           <span className="text-gray-600 font-semibold">No</span>
        </div>
       
        </div>
        <button type="submit" className="bg-green-800 text-white  text-sm px-3 py-1 rounded-sm 
         uppercase cursor-pointer">Submit</button>
        </div>
       </form>
    
      </div>
      <div className="text-center my-5">
         <button type="submit" className="bg-sky-800 text-white  text-sm px-3 py-1 rounded-sm 
         uppercase cursor-pointer">Report</button>
      </div>
    </div>
  );
};

export default SurveyDetails;
