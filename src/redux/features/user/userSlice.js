import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    isLoading: false,
    error: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})

export default userSlice.reducer