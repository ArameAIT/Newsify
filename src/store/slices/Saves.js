import { createSlice } from "@reduxjs/toolkit";

const savesSlice = createSlice({
    name: "saves",
    initialState: {
        value: JSON.parse(localStorage.getItem("Saves")) || [],
    },
    reducers: {
        handleSaves(state, {payload}){
            state.value = payload.elem
            localStorage.setItem("Saves", JSON.stringify(state.value))
        }
    }
})

export const selectSaves = (store) => store.savesSlice.value

export const { handleSaves } = savesSlice.actions

export default savesSlice.reducer