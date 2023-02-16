import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import style from "./TodoList.module.scss";
import { TodoType,sliceType,PayloadType } from '../../types/todos';
import {MdOutlineDeleteOutline} from "react-icons/md";
import {BiRefresh} from "react-icons/bi";
import { deleteTodo,changeTodo} from '../../store/slices/todoSlice';

const TodoList = () => {
   const state = useSelector((state:sliceType) => state.todo)
   const dispatch = useDispatch()
   console.log("statetet",state)

   const handleDelete = (id:number) => {
      dispatch(deleteTodo(id))
   }

   const handleChangeTodo = (id:number) => {
      const todo = prompt("투두를 변경해주세요")
      if(todo !== null) {
         const payload:PayloadType = {todo, id}
         dispatch(changeTodo(payload))
      }
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
                  <div>
                     <button onClick={() => handleChangeTodo(item.id)} className={style.buttons}><BiRefresh/></button>
                     <button onClick={() => handleDelete(item.id)} className={style.buttons}><MdOutlineDeleteOutline/></button>
                  </div>
               </div>
            ))
         }
      </ul>
    </section>
  )
}

export default TodoList
