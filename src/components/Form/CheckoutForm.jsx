
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { PiSpinnerGapBold } from "react-icons/pi";
import './CheckoutForm.css'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState('');
  const [cardError, setCardError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    //fetch client secret
    getClientSecret({ price: 5900 });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //get client secret function
  const getClientSecret = async () => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, { price: 5900 })
    console.log('clientsecret from server', data);
    setClientSecret(data.clientSecret)
  }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
      setIsProcessing(false)
      return
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError('')
    }

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
       payment_method: {
         card: card,
         billing_details: {
           email: user?.email,
           name: user?.displayName,
         },
       }
     })

     if(confirmError){
       console.log(confirmError);
       setCardError(confirmError.message)
       setIsProcessing(false);
       return
     }

     if(paymentIntent.status === 'succeeded'){
      
        //1. create payment info details
        const paymentInfo = {
          transactionId: paymentIntent.id,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          user: {
             name: user?.displayName,
             email: user?.email,
          }
        }
        
      
        try{
            //2. save payment info in db
            await axiosSecure.post(`/payment`, paymentInfo)

            //3. change user role to prouser in db
            await axiosSecure.patch(`/users/updaterole/${user?.email}` ,{ role: 'pro-user'})
            toast.success('Payment Successfully')
            navigate('/')

        } catch (err) {
           console.log(err);
           toast.error(err.message)
        }
     }
  };

  return (
   <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecret || isProcessing}
      className='inline-flex justify-center rounded-md border border-transparent bg-green-100 
      px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none 
      focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
        {isProcessing ? <PiSpinnerGapBold className="animate-spin" /> : 'Pay $199'}
      </button>
    </form>
    { cardError && <p className='text-red-700'>{cardError}</p>}
   </>
  );

}

export default CheckoutForm