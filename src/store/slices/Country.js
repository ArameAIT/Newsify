import { createSlice } from "@reduxjs/toolkit";


const countrySlice = createSlice({
    name : "country",
    initialState : {
        value : JSON.parse(localStorage.getItem("Country")) || "us",
    },
    reducers:{
        handleCountry(state, {payload}){
             state.value = payload.country
             localStorage.setItem("Country", JSON.stringify(state.value))
        }
    }
}) 


export const selectCountry = (store) => store.countrySlice.value

export const {handleCountry} = countrySlice.actions

export default countrySlice.reducer