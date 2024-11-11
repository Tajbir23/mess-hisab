/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useGetUserQuery } from "../redux/services/userApi"


const UserProtectedRoute = ({children}) => {
    const token = localStorage.getItem("token")
    const userData = useGetUserQuery()

    if(userData.isLoading) {
        return <h1>Loading...</h1>
    }

    if(!token || userData.isError) {
        return <Navigate to="/login" />
    }
    
    return children
}

export default UserProtectedRoute