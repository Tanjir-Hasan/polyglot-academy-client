import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import animation1 from "../../../../public/89260-key-login.json";
import animation2 from "../../../../public/24141-unlock-login.json";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {

    const [show, setShow] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { signUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
        console.log(data)
    };


    return (
        <div className='lg:flex justify-center items-center w-full my-20 gap-24'>

            <Lottie animationData={animation1} loop={true} className='lg:w-1/5' />

            <div className='lg:w-1/3'>
                <h3 className='text-4xl text-center font-semibold mb-4'>Login</h3>
                <div className='w-full border-2 p-10'>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" >
                        <div className="space-y-4">
                            <label>
                                <span className="text-xl font-medium">Email</span>
                            </label>

                            {errors.email && <span className="text-red-600 ml-2">is required</span>}

                            <input type="email" name='email' {...register("email", { required: true })} placeholder="Email" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />
                        </div>

                        <div className="space-y-4">
                            <label>
                                <span className="text-xl font-medium">Password</span>
                            </label>

                            {errors.password && <span className="text-red-600 ml-2">is required</span>}

                            <div className="relative">

                                <input type={show ? "text" : "password"} name='password' {...register("password", { required: true })} placeholder="Password" className="block w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-black text-gray-700 focus:ring focus:outline-none" />

                                <div className="absolute inset-y-0 right-3 flex items-center" onClick={() => setShow(!show)}>

                                    {
                                        show ? <AiOutlineEyeInvisible size={'1.5rem'} /> : <AiOutlineEye size={'1.5rem'} />
                                    }

                                </div>

                            </div>

                            <div className="mt-4">
                                <label >
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                        </div>


                        <div className=" mt-6">
                            <input disabled={false} className="px-4 py-3 rounded-full bg-gray-300 text-black focus:ring focus:outline-none w-full text-xl font-semibold transition-colors" type="submit" value="Login" />
                        </div>
                    </form>

                </div>

                <div className='text-center my-5'>
                    <span className='font-thin'>Don't have an account?</span>
                    <Link to="/sign-up" className='font-bold ml-2'>Register</Link>
                </div>

                <div
                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p
                        className="mx-4 mb-0 text-center font-semibold dark:text-white">
                        Or
                    </p>
                </div>

                <SocialLogin></SocialLogin>

            </div>

            <Lottie animationData={animation2} loop={true} className='lg:w-1/5' />
        </div>
    );
};

export default Login;