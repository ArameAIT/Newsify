import { createSlice } from "@reduxjs/toolkit";


const categoriesSlice = createSlice({
    name : "categorie",
    initialState : {
        value : JSON.parse(localStorage.getItem("Category")) || "general",
    },
    reducers:{
        handleCat(state, {payload}){
             state.value = payload.categories
             localStorage.setItem("Category", JSON.stringify(state.value))
        }
    }
}) 


export const selectCat = (store) => store.categoriesSlice.value

export const {handleCat} = categoriesSlice.actions

export default categoriesSlice.reducer