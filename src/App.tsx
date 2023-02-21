import React from 'react'
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <>
      <Nav />
      <TodoList />
      <TodoInput/>
    </>
  )
}

export default App
