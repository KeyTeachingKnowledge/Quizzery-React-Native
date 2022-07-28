import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   accuracy: '-',
 }
 
 const reducers = {
 
   SetAccuracy(state, action) {
      state.accuracy = action.payload + '.0%'
    },
 }

const statsSlice = createSlice({name: "stats", initialState, reducers})

export const { SetAccuracy } = statsSlice.actions


export default statsSlice.reducer