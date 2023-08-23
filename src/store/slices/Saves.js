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
        // addingElem(state, { payload }) {
        //     // const isSelected = state.value.find((el) => el.url == payload.el.url);
        //     // console.log(isSelected);
        //     // if (isSelected == undefined) {

        //     //     state.value = [...state.value, payload.el];
        //     // }

        //     state.value = [...state.value, payload.el];

        // },
        // removeElem(state, { payload }) {
        //     console.log(payload.el.author);
        //     console.log(state.value)
        //    state.value = state.value.filter((el) => el.author != payload.el.author)
        // }
    }
})

export const selectSaves = (store) => store.savesSlice.value

export const { handleSaves } = savesSlice.actions

export default savesSlice.reducer