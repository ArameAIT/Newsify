import { createSlice } from "@reduxjs/toolkit";


const newsSlice = createSlice({
    name : "news",
    initialState : {
        value : []
    },
    reducers:{
        handleNews(state, {payload}){
             state.value = payload.resp
        }
    }
}) 


export const selectNews = (store) => store.newsSlice.value

export const {handleNews} = newsSlice.actions

export default newsSlice.reducer