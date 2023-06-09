import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Login from "../pages/Shared/Login/Login";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../pages/Shared/Dashboard/AllUsers";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";
import MyClasses from "../pages/Shared/Dashboard/MyClasses";
import AddAClass from "../pages/Shared/Dashboard/AddAClass";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../pages/Shared/Dashboard/ManageClasses";
import MyClass from "../pages/Shared/Dashboard/MyClass";
import MySelectedClasses from "../pages/Shared/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/Shared/Dashboard/MyEnrolledClasses";
import PaymentHistory from "../pages/Shared/Dashboard/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome";
import Classes from "../pages/Shared/Classes/Classes";
import Instructors from "../pages/Shared/Instructors/Instructors";

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
            },
            {
                path: "classes",
                // element: <Classes></Classes>
                element: <PrivateRoutes><Classes></Classes></PrivateRoutes>
            },
            {
                path: "instructors",
                element: <PrivateRoutes><Instructors></Instructors></PrivateRoutes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // admin routes
            {
                path: "admin-home",
                element: <AdminRoute><AdminHome></AdminHome> </AdminRoute>
            },
            {
                path: "all-users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "manage-classes",
                element: <AdminRoute><ManageClasses></ManageClasses> </AdminRoute>
            },
            // instructor routes
            {
                path: "add-class",
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: "my-class",
                element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
            },
            // student routes
            {
                path: "my-selected-classes",
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: "my-enrolled-classes",
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: "payment-history",
                element: <PaymentHistory></PaymentHistory>
            },
        ]
    }

]);

export default router;