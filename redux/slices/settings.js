import { createSlice } from "@reduxjs/toolkit"
import {darkColors, lightColors} from '../../assets/colors/colors';


const initialState = {
   colorIndex: 0,
   discoveryMode: false,
   comingFromHome: true,
   allColors: lightColors,
   allColorsHelper: 1
 }
 
 const reducers = {
 
   SetColorIndex(state, action) {
      state.colorIndex = action.payload
    },
    SetDiscoveryMode(state, action) {
      state.discoveryMode = action.payload
    },
    SetComingFromHome(state, action) {
      state.comingFromHome = action.payload
    },
    SetAllColors(state, action) {
      state.allColors = action.payload
    },
    SetAllColorsHelper(state, action) {
      state.allColorsHelper = action.payload
    },
    RotateColor(state) {
       if(state.discoveryMode){
         state.colorIndex = (state.colorIndex + 1) % state.allColors.length
         }
    }

 }

const settingsSlice = createSlice({name: "settings", initialState, reducers})

export const { SetColorIndex } = settingsSlice.actions
export const { SetDiscoveryMode } = settingsSlice.actions
export const { SetComingFromHome } = settingsSlice.actions
export const { SetAllColors } = settingsSlice.actions
export const { RotateColor } = settingsSlice.actions
export const { SetAllColorsHelper } = settingsSlice.actions 
export const Colors = (state) => state.settings.allColors[state.settings.colorIndex];

export default settingsSlice.reducer