import { configureStore } from '@reduxjs/toolkit'
import { serialize } from 'mongodb'
import userReducer from './user/userSlice.js'

export const store = configureStore({
  reducer: { user : userReducer},
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : false,
  })
})