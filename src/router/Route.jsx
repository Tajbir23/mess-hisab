import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home/Home";
import MealDetails from "../page/MealDetails/MealDetails";
import MessWallet from "../page/MessWallet/MessWallet";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
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
                element: <h1>Mess cost</h1>
            },
            {
                path: "mess-wallet",
                element: <MessWallet />
            }
        ]
    }
])

export default router;