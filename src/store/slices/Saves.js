import { createSlice } from "@reduxjs/toolkit";

const savesSlice = createSlice({
    name: "saves",
    initialState: {
        value: []
    },
    reducers: {
        handleSaves(state, {payload}){
            state.value = payload.elem
        }
    }
})

export const selectSaves = (store) => store.savesSlice.value

export const { handleSaves } = savesSlice.actions

export default savesSlice.reducer