import React from 'react'
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import Nav from './components/Nav/Nav';
import style from "./App.module.scss";

const App = () => {
  return (
    <div className={style.main}>
      <Nav />
      <TodoList />
      <TodoInput/>
    </div>
  )
}

export default App
