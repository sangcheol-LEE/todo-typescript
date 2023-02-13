import React,{useState,useRef} from 'react'
import style from "./TodoInput.module.scss";
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from '../../store/slices/todoSlice';
import { TodoType } from '../../types/todos';

const TodoInput = () => {
   const numRef = useRef(2)
   const [todos, setTodos] = useState<TodoType>({
      id: 0,
      checked: false,
      todo : ""
   })
   const dispatch = useDispatch();

   const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setTodos((prev)=> ({
         ...prev,
         todo: e.target.value.trim()
      }))
   }

   const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(todos.todo.length === 0) return;
      dispatch(addTodo(todos))
      setTodos((prev) => ({
         ...prev,
         id:numRef.current,
         todo : ""
      }))
      numRef.current += 1

   }
  return (
    <form onSubmit={handleSubmit}>
       <input type="text" value={todos.todo} placeholder="Add Todo" onChange={handleChange}/>
       <button className={style.formButton}>ADD</button>
    </form>
  )
}

export default TodoInput
