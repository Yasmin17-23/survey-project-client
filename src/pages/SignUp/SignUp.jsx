import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { uploadImage } from "../../api/utils";
import SocialMedia from "../../components/Shared/SocialMedia/SocialMedia";

const SignUp = () => {
  const { createUser,  updateUserProfile, setLoading } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, image, email, password } = data;
    const formData = new FormData();
    formData.append("image", image[0]);

    try {
      setLoading(true)
      //1. Upload the image and get image_url
      const image_url = await uploadImage(image)
      console.log(image_url)
     

      //2. User SignUp 
      const result = await createUser(email, password);
      console.log(result)

      //save username and photo in firebase
      await updateUserProfile(name, image_url)
      navigate('/')
      toast.success('SignUp Successfully!')
      
    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  };

  const passwordValidation = (value) => {
    if (value.length < 6) {
      return toast.error("Password must be at least 6 characters or longer");
    } else if (!/[A-Z]/.test(value)) {
      return toast.error("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(value)) {
      return toast.error("Password must contain at least one lowercase letter");
    }
    return true;
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
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-500 px-2 py-3 rounded-md 
                    focus:outline-amber-800 bg-amber-50 text-gray-800"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600 mt-2 text-md">
                      This name field is required
                    </span>
                  )}
                </div>
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
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    className="w-full border border-gray-500 px-2 py-3 rounded-md 
                    focus:outline-amber-800 bg-amber-50 text-gray-800"
                    {...register("image")}
                  />
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
                      required: true,
                      validate: passwordValidation,
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
                  Sign Up
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:underline hover:text-red-400 text-gray-800"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
