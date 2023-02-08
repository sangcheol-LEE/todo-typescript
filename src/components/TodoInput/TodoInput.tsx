import React,{useState,useRef} from 'react'
import style from "./TodoInput.module.css";
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from '../../store/slices/todoSlice';
import { TodoType } from '../../types/todos';

const TodoInput = () => {
   const nums = useRef(2)
   const [todos, setTodos] = useState<TodoType>({
      id: nums.current,
      checked: false,
      todo : ""
   })
   const dispatch = useDispatch();
   const states = useSelector(state => state)

   console.log(states)
   const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setTodos((prev)=> ({
         ...prev,
         todo: e.target.value
      }))
   }

   const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(addTodo(todos))
      setTodos((prev) => ({
         ...prev,
         id : nums.current,
         todo : ""
      }))
   }
  return (
    <form onSubmit={handleSubmit}>
       <input type="text" value={todos.todo} onChange={handleChange}/>
       <button className={style.formButton}>ADD</button>
    </form>
  )
}

export default TodoInput
