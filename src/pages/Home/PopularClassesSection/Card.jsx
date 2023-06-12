import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { AuthContext } from '../../../providers/AuthProviders';
import { useAdmin } from '../../../hooks/useAdmin';
import { useInstructor } from '../../../hooks/useInstructor';
import { useCart } from '../../../hooks/useCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ data }) => {

    const { theme } = useContext(ThemeContext);

    const { language, image, availableSeats, name, _id, price } = data;

    const { user } = useContext(AuthContext);

    const [, refetch] = useCart();

    const navigate = useNavigate();

    const location = useLocation();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const isAvailable = availableSeats > 0;
    const isButtonDisabled = !isAvailable || isAdmin || isInstructor;

    const handleAddToCard = item => {
        console.log(user)
        if (user && user?.email) {
            const cartItem = { language, image, name, price, email: user?.email }
            fetch('https://summer-camp-server-rouge.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    };


    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <div>
                <img className="lg:rounded-2xl object-cover overflow-hidden" src={image} />
            </div>
            <div className="lg:-translate-y-6 transform lg:ml-32 lg:-mr-5 p-10 shadow-xl hover:shadow-2xl  rounded-bl-2xl border-b-8 border-[#ef476f] overflow-hidden">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold tracking-tight">
                        {language}
                    </h1>

                    <p className="text-xl font-bold ">
                        Instructor Name
                    </p>
                    <p className="text-2xl font-bold text-[#ef476f]">
                        {name}
                    </p>
                </div>
                <div className="grid border-t border-b border-gray-200 mt-6 py-4">
                    <div className="flex justify-between">
                        <p className='text-xl font-bold'>Available Seats</p>
                        <p className="text-2xl font-bold text-[#ef476f]">
                            {availableSeats}
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-xl font-bold'>Price</p>
                        <p className="text-2xl font-bold text-[#ef476f]">
                            $ {price}
                        </p>
                    </div>
                </div>
                <div className="grid border-b border-gray-200 mb-12 py-4">


                    <button
                        className={`bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded ${isButtonDisabled ? 'disabled' : ''}`}
                        disabled={isButtonDisabled}
                        onClick={() => handleAddToCard(_id)}
                    >
                        {isAvailable ? 'Get this Course' : 'Sold Out'}
                    </button>


                </div>
            </div>
        </div>
    );
};

export default Card;