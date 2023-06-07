import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { signInWithPopup } from 'firebase/auth';

const SocialLogin = () => {

    const { googleAuthProvider, auth } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>

            <div className='w-1/2 mx-auto border-4 border-r-[#4285F4] border-t-[#DB4437] border-b-[#0F9D58] border-l-[#F4B400] rounded-lg'>

                <button onClick={handleGoogle} className='flex justify-between items-center p-2 hover:animate-pulse'>
                    <FcGoogle size={"3rem"} className="ml-2" />
                    <p className="text-center ml-4 text-slate-950 flex-1">
                        Continue with Google
                    </p>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;