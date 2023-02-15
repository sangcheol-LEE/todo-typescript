import { StateType, TodoType } from './../../types/todos';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState:StateType = {
   todos: []
}


export const todoSlice = createSlice({
   name : "todoCounter",
   initialState,
   reducers : {
      addTodo : (state, action: PayloadAction<TodoType>) => {
         const prev = {
            ...state,
            todos: state.todos.concat(action.payload)
         }
         return prev
      },
      deleteTodo: (state, action) => {
         const prev = {
            ...state,
            todos: state.todos.filter((item) => item.id !== action.payload)
         }
         return prev
      },
      changeTodo : (state, action) => {
         const prev = {
            ...state,
            todos: state.todos
         }
      }
   }
})

export const {addTodo, deleteTodo,changeTodo} = todoSlice.actions

export default todoSlice.reducer

