import { createSlice } from "@reduxjs/toolkit";


const categoriesSlice = createSlice({
    name : "categorie",
    initialState : {
        value : "general"
    },
    reducers:{
        handleCat(state, {payload}){
             state.value = payload.categories
        }
    }
}) 


export const selectCat = (store) => store.categoriesSlice.value

export const {handleCat} = categoriesSlice.actions

export default categoriesSlice.reducer