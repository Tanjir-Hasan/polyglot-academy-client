import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

// export const useAdmin = () => {
//     const { user, loading } = useContext(AuthContext);

//     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({

//         queryKey: ['isAdmin', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading];
// }

export const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading];
}