import React from 'react'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'

const App = () => {
  return (
    <div>
      <TodoList />
      <TodoInput/>
    </div>
  )
}

export default App
