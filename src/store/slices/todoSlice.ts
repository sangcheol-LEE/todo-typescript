import { StateType, TodoType,PayloadType, sliceType } from './../../types/todos';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState:StateType = {
   todos: [],
}


export const todoSlice = createSlice({
   name : "todoCounter",
   initialState,
   reducers : {
      addTodo : (state, action: PayloadAction<TodoType>) => ({
         todos: state.todos.concat(action.payload),
      }),
      deleteTodo: (state, action) => ({
         todos: state.todos.filter((item) => item.id !== action.payload)
      }),
      changeTodo : (state:any, action:PayloadAction<PayloadType>) => {
         state.todos.map((item:TodoType) => {
               if(item.todo !== undefined || item.todo !== null) {
                  if(item.id === action?.payload?.id) {
                     item.todo = action.payload?.todo
                  }
               }
               return state
            })
      },
      handleChecked: (state, action) => {
         state.todos.map((item: TodoType) => {
            if(item.id === action.payload) {
               item.checked = !item.checked
            }
            return state
         })
      },
      filteredAll : (state,action) => ({
         todos: state.todos
      }),
      filteredActive : (state,action) => {

      },
      filteredCompleted : (state,action) => {
         const newData = action.payload;
         return newData.filter((item:TodoType) => item.checked)
      }
   },
})

export const {addTodo, deleteTodo,changeTodo,handleChecked,filteredAll,filteredActive,filteredCompleted} = todoSlice.actions

export default todoSlice.reducer

