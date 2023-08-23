import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './slices/News'
import categoriesSlice from './slices/Categories'
import countrySlice from './slices/Country'
import searchSlice from './slices/Search'
import savesSlice from './slices/Saves'

export const store = configureStore({
  reducer: {
    newsSlice,
    categoriesSlice,
    countrySlice,
    searchSlice,
    savesSlice
  },
})