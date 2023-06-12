import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // create

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign 

    const signUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // user update

    const userUpdate = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL });
    };

    // google

    const googleAuthProvider = new GoogleAuthProvider();

    // observer

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
    
            // get and set token
            if (loggedUser) {
                axios.post('https://summer-camp-server-rouge.vercel.app/jwt', { email: loggedUser.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            } else { 
                localStorage.removeItem('access-token')
            }
            // setLoading(false)
        });
    
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        createUser,
        signUser,
        logOut,
        auth,
        userUpdate,
        loading,
        googleAuthProvider,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;