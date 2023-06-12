import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProviders';

const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);

    const { user } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        fetchPayments();
    }, []);

    async function fetchPayments() {
        try {
            const response = await axiosSecure.get(`/payments/${user?.email}`);
            const { data } = response;
            setPayments(data);
        } catch (error) {
            console.error('Error fetching payments:', error);
        }
    }

    return (
        <div>
            <h1 className='py-12 text-5xl font-[Pacifico] text-center'>All Payments</h1>
            <ul className='flex items-center flex-col list-decimal'>
                {payments.map(payment => (
                    <li className='font-bold' key={payment._id}>{payment.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentHistory;