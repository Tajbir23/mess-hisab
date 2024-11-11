import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealApi = createApi({
    reducerPath: "mealApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://mess-hisab-server-production.up.railway.app/api/meal",
        baseUrl: "http://localhost:3000/api/meal",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if(token) {
                headers.set("authorization", `Bearer ${token}`)
            }
        },
    }),
    tagTypes: ["meals", "meal"],
    endpoints: (builder) => ({
        addMeal: builder.mutation({
            query: (body) => ({
                url: "/add_meal",
                method: "POST",
                body
            }),
            invalidatesTags: ["meal", "user"]
        })
    }),
})

export const { useAddMealMutation } = mealApi;