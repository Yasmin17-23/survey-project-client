import axios from "axios"
import { useNavigate } from "react-router";
import useAuth from "./useAuth";




export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  //request interceptor to add authorization header to every secure call to the api
  axiosSecure.interceptors.request.use( function (config) {
    const token = localStorage.getItem('access-token');
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    //do something with request error
    return Promise.reject(error);
  });


  axiosSecure.interceptors.response.use( function (response) {
     return response;
  }, async (error) => {
    const status = error.response.status;

    //401 and 403 status to logout the user and move the user to the login page
    if(status === 401 || status === 403){
      await logOut();
      navigate('/login');
    }
    return Promise.reject(error)
  })

  return axiosSecure;
}

export default useAxiosSecure