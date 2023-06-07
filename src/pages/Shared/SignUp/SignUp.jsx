import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import Lottie from "lottie-react";
import animation from "../../../../public/137860-fill-a-form-icon.json";
import { AuthContext } from '../../../providers/AuthProviders';

const SignUp = () => {

    const { createUser, userUpdate } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {

        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const createUser = result.user;
                userUpdate(data.name, data.photoURL);
                // createUser.displayName = name;
                // createUser.photoURL = photoUrl;
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })

    };

    return (
        <div className='flex items-center justify-center gap-10 mx-auto'>
            <div className='w-1/2'>
                <h3 className='text-4xl text-center font-semibold mb-4'>Register</h3>
                <div className='border-2 p-10'>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
                        <div className="space-y-4">
                            <label>
                                <span className="text-xl font-medium">Full Name</span>
                            </label>

                            {errors.name && <span className="text-red-600 ml-2">*required</span>}

                            <input type="text" name='name' {...register("name", { required: true })} placeholder="Email" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />
                        </div>

                        <div className="space-y-4">
                            <label>
                                <span className="text-xl font-medium">Email</span>
                            </label>

                            {errors.email && <span className="text-red-600 ml-2">*required</span>}

                            <input type="email" name='email' {...register("email", { required: true })} placeholder="Email" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />
                        </div>

                        <div className="space-y-4">
                            <label>
                                <span className="text-xl font-medium">Photo URL</span>
                            </label>

                            {errors.photoURL && <span className="text-red-600 ml-2">*required</span>}

                            <input type="text" name='photoURL' {...register("photoURL", { required: true })} placeholder="Email" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />
                        </div>

                        <div className="space-y-4">
                            <label>
                                <span className="text-xl font-medium">Password</span>
                            </label>

                            {errors.password && <span className="text-red-600 ml-2">*required</span>}

                            <input type="password" name='password' {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })}
                                placeholder="Password" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />

                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}

                        </div>

                        {/* <div className="space-y-4">
                            <label>
                                <span className="text-xl font-medium">Confirm Password</span>
                            </label>

                            {errors.confirm && <span className="text-red-600 ml-2">*required</span>}

                            <input type="password" name='confirm' {...register("confirm", { required: true })} placeholder="Confirm Password" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />

                        </div> */}

                        <div className=" mt-6">
                            <input disabled={false} className="px-4 py-3 rounded-full bg-gray-300 text-black focus:ring focus:outline-none w-full text-xl font-semibold transition-colors" type="submit" value="Create an account" />
                        </div>
                    </form>

                </div>

                <div className='text-center my-5'>
                    <span className='font-thin'>Already have an account?</span>
                    <Link to="/login" className='font-bold ml-2'>Login</Link>
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