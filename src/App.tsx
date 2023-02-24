import React,{useEffect} from 'react'
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import Nav from './components/Nav/Nav';
import { useSelector,useDispatch } from 'react-redux';
import {sliceType,} from "./types/todos";
import { addTodo } from './store/slices/todoSlice';

const App = () => {
  const state = useSelector((state: sliceType) => state.todo.filteredTodos)
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(state))
  },[state])
  return (
    <>
      <Nav />
      <TodoList />
      <TodoInput/>
    </>
  )
}

const readTodo =() => {
  const todos = localStorage.getItem("todos")
  return todos ? JSON.parse(todos) : [];
}
export default App
