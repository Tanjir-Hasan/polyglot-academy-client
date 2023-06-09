import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Login from "../pages/Shared/Login/Login";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../pages/Shared/Dashboard/AllUsers";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "sign-up",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "all-users",
                // element: <AllUsers></AllUsers>
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }

]);

export default router;