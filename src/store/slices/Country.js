import { createSlice } from "@reduxjs/toolkit";


const countrySlice = createSlice({
    name : "country",
    initialState : {
        value : "us"
    },
    reducers:{
        handleCountry(state, {payload}){
             state.value = payload.country
        }
    }
}) 


export const selectCountry = (store) => store.countrySlice.value

export const {handleCountry} = countrySlice.actions

export default countrySlice.reducer