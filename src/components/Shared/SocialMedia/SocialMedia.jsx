import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const SocialMedia = () => {
    const { signInWithGoogle, signInWithGithub } = useAuth();
    const navigate = useNavigate();

    const handleSocialLogin = async socialLogin => {
        try{
            const result = await socialLogin()
            console.log(result)
            toast.success('SignUp Successfully')
            navigate('/')
        } catch (err) {
           console.log(err)
           toast.error(err.message)            
        }
    }
  return (
    <div>
      <div className="flex flex-col">
        <button onClick={() => handleSocialLogin(signInWithGoogle)}
          className="disabled:cursor-not-allowed  flex justify-center  items-center 
                     border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={28} />
          <p className="text-md">Continue with Google</p>
        </button>
        <button onClick={() => handleSocialLogin(signInWithGithub)}
          className="disabled:cursor-not-allowed  flex justify-center  items-center 
                     border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FaGithub size={28} />
          <p className="text-md">Continue with Github</p>
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
