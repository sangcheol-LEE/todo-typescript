import React,{useState,useRef} from 'react'
import style from "./TodoInput.module.scss";
import { useDispatch } from 'react-redux';
import { addTodo ,filteredChecked} from '../../store/slices/todoSlice';
import { TodoType } from '../../types/todos';

const TodoInput = () => {
   const numRef = useRef(0)
   const dispatch = useDispatch();
   const [todos, setTodos] = useState<TodoType>({
      id: 0,
      checked: false,
      todo : ""
   })

   const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setTodos((prev)=> ({
         ...prev,
         todo: e.target.value
      }))
      dispatch(filteredChecked("all"))
   }

   const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(todos.todo?.trim().length === 0) return;
      dispatch(addTodo(todos))
      setTodos((prev) => ({
         ...prev,
         id:numRef.current,
         todo : ""
      }))
      dispatch(filteredChecked("all"))
      numRef.current += 1

   }
  return (
    <form onSubmit={handleSubmit} className={style.form}>
       <input className={style.inputs} type="text" value={todos.todo} placeholder="Add Todo" onChange={handleChange}/>
       <button className={style.formButton}>ADD</button>
    </form>
  )
}

export default TodoInput
