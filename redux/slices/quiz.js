import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   currentQuestion: 0,
   shownQuestion: 0,
   selectedChoice: -1,
   selectedChoices: [],
   isCorrect: -1,
   modalVisible: false,
   finishFlag: false,
   newQuiz: true
 }
 
 const reducers = {
 
   SetCurrentQuestion(state, action) {
      state.currentQuestion = action.payload
    },
    SetShownQuestion(state, action) {
      state.shownQuestion = action.payload
    },
    SetSelectedChoice(state, action) {
      state.selectedChoice = action.payload
    },
    SetSelectedChoices(state, action) {
      state.selectedChoices = action.payload
    },
    SetModalVisible(state, action) {
      state.modalVisible = action.payload
    },
    SetFinishFlag(state, action) {
      state.finishFlag = action.payload
    },
    SetIsCorrect(state, action) {
      state.isCorrect = action.payload
    },
    SetNewQuiz(state, action) {
      state.newQuiz = action.payload
    },
    ResetQuiz(state){
      state.currentQuestion = 0;
      state.shownQuestion = 0;
      state.isCorrect = -1;
      state.selectedChoice = -1;
      state.selectedChoices = [];
      state.finishFlag = false;
      state.newQuiz = true;       // means we will randomize upon start then set it to false in app.js

    }
    
 }

const quizSlice = createSlice({name: "quiz", initialState, reducers})

export const { SetCurrentQuestion } = quizSlice.actions
export const { SetShownQuestion } = quizSlice.actions
export const { SetSelectedChoice } = quizSlice.actions
export const { SetSelectedChoices } = quizSlice.actions
export const { SetModalVisible } = quizSlice.actions
export const { SetFinishFlag } = quizSlice.actions
export const { SetIsCorrect } = quizSlice.actions
export const { ResetQuiz } = quizSlice.actions
export const { SetNewQuiz } = quizSlice.actions
export const IsTraversing = (state) => (state.quiz.shownQuestion !== state.quiz.currentQuestion)
export default quizSlice.reducer
