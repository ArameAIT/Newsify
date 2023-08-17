import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './slices/News'
import categoriesSlice from './slices/Categories'
import countrySlice from './slices/Country'

export const store = configureStore({
  reducer: {
    newsSlice,
    categoriesSlice,
    countrySlice
  },
})