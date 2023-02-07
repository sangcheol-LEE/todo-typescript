import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import style from "./TodoList.module.css";
import { TodoType,sliceType } from '../../types/todos';
import {MdOutlineDeleteOutline} from "react-icons/md";
import { deleteTodo } from '../../store/slices/todoSlice';

const TodoList = () => {
   const state = useSelector((state:sliceType) => state.todo)
   const dispatch = useDispatch()
   console.log("statetet",state)

   const handleDelete = (id:number) => {
      dispatch(deleteTodo(id))
   }

  return (
   <section className={style.sections}>
      <ul>
         {
            state.todos?.map((item:TodoType) => (
               <div className={style.listBox} key={item.id}>
                  <div className={style.lists}>
                     <input type="checkbox" className={style.check} />
                     <li>{item.todo}</li>
                  </div>
                  <button onClick={() => handleDelete(item.id)} className={style.buttons}><MdOutlineDeleteOutline/></button>
               </div>
            ))
         }
      </ul>
    </section>
  )
}

export default TodoList
