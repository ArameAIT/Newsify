import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        value : ""
    },
    reducers : {
        handleSearch(state, {payload}){
            state.value = payload.search
        }
    }
})

export const selectSearch = (store) => store.searchSlice.value

export const {handleSearch} = searchSlice.actions

export default searchSlice.reducer