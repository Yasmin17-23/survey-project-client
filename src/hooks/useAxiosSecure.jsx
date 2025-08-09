import axios from "axios"
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  
  //request interceptors to add authorization to the all api call
  axiosSecure.interceptors.request.use(function (config){
    const token = localStorage.getItem('access-token')
    //console.log('All request stopped by request interceptors', token)
    config.headers.authorization = `Bearer ${token}`;
     return config;
  }, function (error) {
     //do something where occurs request error
     return Promise.reject(error);
  });
  
  //response interceptors for 401 and 403 status
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    if(status === 401 || status === 403) {
       await logOut();
       navigate('/login');
    }

    return Promise.reject(error);
  })


  return axiosSecure;
}

export default useAxiosSecure