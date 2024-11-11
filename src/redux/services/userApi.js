import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://mess-hisab-server-production.up.railway.app/api/user",
        baseUrl: "http://localhost:3000/api/user",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if(token) {
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes: ["users", "user"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body
            })
        }),
        register: builder.mutation({
            query: (body) => ({
                url: "/signup",
                method: "POST",
                body
            })
        }),
        getUser: builder.query({
            query: () => "/user",
            providesTags: ["user"]
        }),
        getAllUsers: builder.query({
            query: () => "/users",
            providesTags: ["users"]
        }),
        updateStatus: builder.mutation({
            query: ({id,body}) => ({
                url: `/update-status/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["users"]
        }),
        updateRole: builder.mutation({
            query: ({id,body}) => ({
                url: `/update-role/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["users"]
        }),
        
    })
})

export const { useLoginMutation, useRegisterMutation, useGetUserQuery, useGetAllUsersQuery, useUpdateStatusMutation, useUpdateRoleMutation } = userApi