import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home/Home";
import MealDetails from "../page/MealDetails/MealDetails";
import MessWallet from "../page/MessWallet/MessWallet";
import MessCost from "../page/MessCost/MessCost";
import Members from "../page/Members/Members";
import MyPayments from "../page/MyPayments/MyPayments";
import Profile from "../page/Profile/Profile";
import Login from "../page/Authentication/Login";
import Signup from "../page/Authentication/Signup";
import UserProtectedRoute from "./UserProtectedRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <UserProtectedRoute><HomeLayout /></UserProtectedRoute>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "meal-details",
                element: <MealDetails />
            },
            {
                path: "bazar-details",
                element: <h1>Bazar details</h1>
            },
            {
                path: "mess-cost",
                element: <MessCost />
            },
            {
                path: "mess-wallet",
                element: <MessWallet />
            },
            {
                path: "members",
                element: <Members />
            },
            {
                path: "my-payments",
                element: <MyPayments />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "signup",
        element: <Signup />
    }
])

export default router;