import { createSlice } from "@reduxjs/toolkit";


const newsSlice = createSlice({
    name : "news",
    initialState : {
        value : JSON.parse(localStorage.getItem("News")) || [],
    },
    reducers:{
        handleNews(state, {payload}){
             state.value = payload.resp
             localStorage.setItem("News", JSON.stringify(state.value))
        }
    }
}) 


export const selectNews = (store) => store.newsSlice.value

export const {handleNews} = newsSlice.actions

export default newsSlice.reducer