import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useCart } from '../../../../hooks/useCart';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2));

    return (
        <div className='w-9/12 mx-auto my-10'>
            <h2 className='py-12 text-5xl font-[Pacifico] text-center'>Make your Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutFrom cart={cart} price={price}></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;