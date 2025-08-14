import { Helmet } from "react-helmet"
import { FaCheckCircle } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { Link } from "react-router";


const Pricing = () => {
  return (
    <>
     <Helmet>
        <title>Pricing - Pro User Membership</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center my-8">
              <div className="flex flex-col  justify-center items-center mb-8">
                <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
                 Pro User Membership Pricing
                </h2>
                <p className="text-sm text-gray-700 font-semibold">If you want membership for our website, Please buy our membership plan.</p>
              </div>
              <div>
                 <div className="px-6 py-4 transition-colors duration-300 transform bg-gray-800 
                 rounded-lg dark:bg-gray-700 text-white">
                <div className="flex items-center gap-2">
                <ImUserTie className="w-6 h-6 text-blue-700"/>
                <p className="max-w-sm text-xl font-medium text-gray-100">Pro - User</p>
                </div>
                
                <h4 className="mt-2 text-3xl font-semibold text-gray-100">$59 <span className="text-base font-normal text-gray-400">/ Month</span></h4>
                
                <p className="mt-4 text-gray-300">For most priority users that want to optimaize all surveys.</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                       <FaCheckCircle className="w-4 h-4 text-blue-500"/>

                        <span className="mx-4 text-gray-300">Access to Excluesive Content</span>
                    </div>

                    <div className="flex items-center">
                        <FaCheckCircle className="w-4 h-4 text-blue-500"/>
                        <span className="mx-4 text-gray-300">Add Personal Opinion</span>
                    </div>

                    <div className="flex items-center">       
                        <FaCheckCircle className="w-4 h-4 text-blue-500"/>
                        <span className="mx-4 text-gray-300">Priority support</span>
                    </div>

                    <div className="flex items-center">
                        <FaCheckCircle className="w-4 h-4 text-blue-500"/>
                        <span className="mx-4 text-gray-300">Can Participate in voting</span>
                    </div>

                    <div className="flex items-center">
                        <FaCheckCircle className="w-4 h-4 text-blue-500"/>
                        <span className="mx-4 text-gray-300">Special Recognization Badge</span>
                    </div>
                </div>

              <Link to={`/buy-membership`}>
              <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white 
                capitalize transition-colors duration-300 transform bg-blue-500 rounded-md 
                hover:bg-blue-600 focus:outline-none focus:bg-blue-600 cursor-pointer">
                    Buy Membership
                </button>
              </Link>
            </div>

              </div>
            </div>
    </>
  )
}

export default Pricing