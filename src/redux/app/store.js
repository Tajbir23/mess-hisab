import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../features/user/userSlice'
import { userApi } from '../services/userApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { mealApi } from '../services/mealApi'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [mealApi.reducerPath]: mealApi.reducer,
    userReducer: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, mealApi.middleware)
})

setupListeners(store.dispatch)