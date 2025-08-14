import useAuth from "../../hooks/useAuth";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from "../../components/Form/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)


const BuyMembership = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="flex flex-col my-6 justify-center items-center">     
       <div className="flex flex-col  justify-center items-center mb-8">
        <h2 className="md:text-3xl font-arvo  font-bold text-gray-400">
          Membership Pricing Information
        </h2>
        <p className="text-sm text-gray-700 font-semibold">
          If you want membership for our website, Please Pay First!
        </p>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-rose-300 rounded-full"></span>
          <span className="inline-block w-3 h-1 bg-rose-300 mx-1 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-rose-300  rounded-full"></span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <img src={user?.photoURL} alt="" className="rounded-lg w-48 md:w-96" />
        <div className="flex flex-col justify-center items-center ">
          <h2 className="md:text-xl text-rose-400 font-bold">
            <span className="text-gray-700">Name: </span>
            {user?.displayName}
          </h2>
          <p className="text-gray-400 text-sm">
            <span className="text-gray-700 font-bold">Email: </span>
            {user?.email}
          </p>
        </div>
      </div>
      <div className="my-5">
        <button className="btn">
          <span className="text-lg text-gray-500">Price: </span> 
          <div className="badge badge-md badge-secondary">+59</div>
        </button>
      </div>
     
      
    </div>
    <div className="my-5">
          <h2 className="md:text-xl text-rose-900 font-bold">
           Payment Section
          </h2>
         
            <div className="mt-5 border border-green-100 w-2/3 p-4 rounded-md">
              <Elements stripe={stripePromise}>
              {/* Checkout Form */}
              <CheckoutForm/>
            </Elements>   
            </div>     
      </div>
    </div>
    
  );
};

export default BuyMembership;
