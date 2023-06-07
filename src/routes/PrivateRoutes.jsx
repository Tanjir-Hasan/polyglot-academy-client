import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { DotLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div>
            <DotLoader color="#36d7b7" />
        </div>
    };

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }}></Navigate>
};

export default PrivateRoutes;