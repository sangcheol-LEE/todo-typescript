import { StateType, TodoType,PayloadType } from './../../types/todos';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState:StateType = {
   todos: [],
   filteredTodos:[],
   isDarkMode:false
}


export const todoSlice = createSlice({
   name : "todoCounter",
   initialState,
   reducers : {
      addTodo : (state, action: PayloadAction<TodoType>) => {
         state.todos = state.todos.concat(action.payload)
      },
      deleteTodo: (state, action) => {
         state.todos = state.todos.filter((item) => item.id !== action.payload)
         state.filteredTodos = state.todos
      },
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
      filteredChecked : (state, action) => {
         switch(action.payload) {
            case "all" :
               state.filteredTodos = state.todos;
               break;
            case "active" :
               state.filteredTodos = state.todos.filter((item) => !item.checked);
               break;
            case "complete" :
               state.filteredTodos = state.todos.filter((item) => item.checked);
               break;
            default :
               state.filteredTodos = state.todos;
               break;
         }
      },
      getDarkMode : (state) => {
         state.isDarkMode = !state.isDarkMode
         return state
      }
   },
})

export const {addTodo, deleteTodo,changeTodo,getDarkMode,handleChecked,filteredChecked} = todoSlice.actions

export default todoSlice.reducer

