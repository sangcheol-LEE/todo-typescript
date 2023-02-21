import React,{useCallback} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import style from "./TodoList.module.scss";
import { TodoType,sliceType,PayloadType } from '../../types/todos';
import {MdOutlineDeleteOutline} from "react-icons/md";
import {BiRefresh} from "react-icons/bi";
import { deleteTodo,changeTodo,handleChecked} from '../../store/slices/todoSlice';
import CN from "classnames";

const TodoList = () => {
   const state = useSelector((state:sliceType) => state.todo)
   const dispatch = useDispatch()

   const handleDelete = (id:number) => {
      dispatch(deleteTodo(id))
   }

   const handleChangeTodo = useCallback((id:number) => {
      const todo = prompt("투두를 변경해주세요")
      if(todo !== null) {
         const payload:PayloadType = {todo, id}
         dispatch(changeTodo(payload))
      }
   },[dispatch])


  return (
   <section className={style.sections}>
      <ul className={style.list}>
         {
            state.filteredTodos?.map((item:TodoType) => (
               <div className={style.listBox} key={item.id}>
                  <div className={style.lists}>
                     <input type="checkbox" onChange={() => dispatch(handleChecked(item.id))} className={style.check} />
                     <li className={CN(item?.checked ? style.list : "")}>{item.todo}</li>
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
