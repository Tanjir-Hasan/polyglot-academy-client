import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import Lottie from "lottie-react";
import animation from "../../../../public/137860-fill-a-form-icon.json";
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser, userUpdate } = useContext(AuthContext);

    const [errorSign, setErrorSign] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {

        console.log(data)

        if (data.password !== data.confirm) {
            setErrorSign('Passwords do not match');
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const createUser = result.user;
                userUpdate(data.name, data.photoURL);
                createUser.displayName = data.name;
                createUser.photoURL = data.photoURL;
            })
            .then(() => {
                // save the user in the database
                const savedUser = { name: data.name, email: data.email, image: data.photoURL }
                fetch('https://summer-camp-server-rouge.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            setErrorSign('');
                            navigate(from, { replace: true });
                        }
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='flex items-center justify-center gap-10 mx-auto py-10'>
            <div className='w-1/2'>
                <h3 className='text-4xl text-center font-semibold mb-4'>Register</h3>
                {errorSign && <p className='text-center font-bold text-red-600'>{errorSign}</p>}
                <div className='border-2 p-10'>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
                        <div className="space-y-4">
                            <label className='flex items-center'>
                                <span className="text-xl font-medium">Full Name</span>
                                {errors.name && <span className="font-extrabold text-red-600 ml-2">*required</span>}
                            </label>


                            <input type="text" name='name' {...register("name", { required: true })} placeholder="Full Name" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />
                        </div>

                        <div className="space-y-4">
                            <label className='flex items-center'>
                                <span className="text-xl font-medium">Email</span>
                                {errors.email && <span className="font-extrabold text-red-600 ml-2">*required</span>}
                            </label>


                            <input type="email" name='email' {...register("email", { required: true })} placeholder="Email" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />
                        </div>

                        <div className="space-y-4">
                            <label className='flex items-center'>
                                <span className="text-xl font-medium">Photo URL</span>
                                {errors.photoURL && <span className="font-extrabold text-red-600 ml-2">*required</span>}
                            </label>


                            <input type="text" name='photoURL' {...register("photoURL", { required: true })} placeholder="Email" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />
                        </div>

                        <div className="space-y-4">
                            <label className='flex items-center'>
                                <span className="text-xl font-medium">Password</span>
                                {errors.password && <span className="font-extrabold text-red-600 ml-2">*required</span>}
                            </label>


                            <input type="password" name='password' {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })}
                                placeholder="Password" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />

                            {errors.password?.type === 'minLength' && <p className="font-extrabold text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="font-extrabold text-red-600">Password must have one Uppercase and one special character.</p>}

                        </div>

                        <div className="space-y-4">
                            <label className='flex items-center'>
                                <span className="text-xl font-medium">Confirm Password</span>
                                {errors.confirm && <span className="font-extrabold text-red-600 ml-2">*required</span>}
                            </label>


                            <input type="password" name='confirm' {...register("confirm", { required: true })} placeholder="Confirm Password" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />

                        </div>

                        <div className=" mx-auto mt-6">
                            <input disabled={false} className="bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border-4 border-[#ef476f] hover:border-transparent rounded w-full" type="submit" value="Create an account" />
                        </div>
                    </form>

                </div>

                <div className='text-center my-5'>
                    <span className='font-thin'>Already have an account?</span>
                    <Link to="/login" className='font-bold ml-2 text-[#ef476f] hover:text-[#e22e58]'>Login</Link>
                </div>

                <div
                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p
                        className="mx-4 mb-0 text-center font-semibold dark:text-white">
                        Or
                    </p>
                </div>

                <div className='w-[535px] mx-auto'>
                    <SocialLogin></SocialLogin>
                </div>

            </div>
            <Lottie animationData={animation} loop={true} className='w-1/3' />
        </div>
    );
};

export default SignUp;