import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { useInstructor } from '../hooks/useInstructor';

const InstructorRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const [isInstructor, isInstructorLoading] = useInstructor();

    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div>Loading</div>
    }

    if (user && isInstructor) {
        return children;
    }
    
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;