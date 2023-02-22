import React,{useCallback} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import style from "./TodoList.module.scss";
import { TodoType,sliceType,PayloadType } from '../../types/todos';
import {MdOutlineDeleteOutline} from "react-icons/md";
import {BiRefresh} from "react-icons/bi";
import { deleteTodo,changeTodo,handleChecked,filteredChecked} from '../../store/slices/todoSlice';
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
         dispatch(filteredChecked("all"))

      }
   },[dispatch])


  return (
   <section className={style.sections}>
      <ul className={style.list}>
         {
            state.filteredTodos?.map((item:TodoType) => (
               <li className={style.listBox} key={item.id}>
                  <div className={style.lists}>
                     <input type="checkbox" onChange={() => dispatch(handleChecked(item.id))} className={style.check} />
                  </div>
                     <div className={CN(style.text ,item.checked ? style.list : "")}>{item.todo}</div>
                  <div className={style.icon_box}>
                     <div className={style.icon}>
                        <button onClick={() => handleChangeTodo(item.id)} className={style.buttons}>
                           <BiRefresh/>
                        </button>
                     </div>
                     <span className={style.icon}>
                        <button onClick={() => handleDelete(item.id)} className={style.buttons}>
                           <MdOutlineDeleteOutline/>
                        </button>
                     </span>
                  </div>
               </li>
            ))
         }
      </ul>
    </section>
  )
}

export default TodoList
