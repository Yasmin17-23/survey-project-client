import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import SocialMedia from "../../components/Shared/SocialMedia/SocialMedia";



const Login = () => {
    const { signInUser, setLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/'

   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
      const { email, password } = data;
  
      try {
      setLoading(true)
      //2. User Sign In
      await signInUser(email, password)
      navigate(from)
      toast.success('Login Successfully!')
     
        
      } catch (err) {
        console.log(err);
        toast.error(err.message)
        setLoading(false)
      }
    };
  return (
     <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-amber-900">Sign Up!</h1>
              <p className="py-6 font-semibold">Welcome our survey !</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-3">
                   
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full border border-gray-500 px-2 py-3 rounded-md 
                        focus:outline-amber-800 bg-amber-50 text-gray-800"
                        placeholder="Enter Your Email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span className="text-red-600 mt-2 text-md">
                          This name field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full border border-gray-500 px-2 py-3 rounded-md 
                        focus:outline-amber-800 bg-amber-50 text-gray-800"
                        placeholder="******"
                        {...register("password", {
                          required: true
                         
                        })}
                      />
                      {errors.password && (
                        <span className="text-red-600 mt-2 text-md">
                          This password field is required
                        </span>
                      )}
                    </div>
                  </div>
    
                  <div className="w-3/4 mx-auto mt-5">
                    <button
                      type="submit"
                      className="rounded-md w-full
                  bg-lime-800 py-3 text-white text-bold uppercase"
                    >
                      Log In
                    </button>
                  </div>
                </form>
                <div className="flex  items-center pt-4 space-x-1">
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    
                  <p className="px-3 text-center text-xl font-bold dark:text-gray-400">
                    Signup with social accounts
                  </p>
    
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <SocialMedia/>
                <p className="px-6 text-sm text-center text-gray-400">
                  Don't  have an account?{" "}
                  <Link
                    to="/signup"
                    className="hover:underline hover:text-red-400 text-gray-800"
                  >
                    Signup
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Login