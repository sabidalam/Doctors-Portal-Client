import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import Loading from '../../SharedPages/Loading/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatmentName, price, appointmentDate, slot } = booking;
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    };
    return (
        <div>
            <h3 className="text-3xl font-bold my-4">Payment for {treatmentName}</h3>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;