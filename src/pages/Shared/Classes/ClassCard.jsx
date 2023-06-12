import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { useCart } from '../../../hooks/useCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAdmin } from '../../../hooks/useAdmin';
import { useInstructor } from '../../../hooks/useInstructor';

const ClassCard = ({ data }) => {

    const { language, image, availableSeats, price, name, _id } = data;
    const isAvailable = availableSeats > 0;

    const { user } = useContext(AuthContext);

    const [, refetch] = useCart();

    const navigate = useNavigate();

    const location = useLocation();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const isButtonDisabled = !isAvailable || isAdmin || isInstructor || !user;

    const handleAddToCard = item => {
        // console.log(item)
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
        <div className={`${isAvailable ? '' : 'bg-red-400'} pt-5 py-10 w-1/2 mx-auto rounded-xl`}>
            <h1 className='text-3xl text-center font-[Inconsolata]'>{language}</h1>
            <div className="">
                <div className="relative mt-3 flex flex-wrap mx-auto justify-center">
                    <div className="min-w-[340px] flex flex-col group">
                        <div className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
                            <img
                                src={image}
                                className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                alt=""
                            />
                            <div className="absolute border-4 border-[#ef476f]  w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
                        </div>
                        <p className="mb-4 text-lg text-center">
                            By, {name}.
                        </p>
                        <div className="flex justify-between items-center gap-x-3">
                            <p className='text-lg font-semibold'>Available Seat: {availableSeats}</p>

                            <p className='text-lg font-semibold'>$: {price}</p>

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
            </div>
        </div>
    );
};

export default ClassCard;