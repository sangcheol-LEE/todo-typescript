import React from 'react'
import style from "./Nav.module.scss";
import { useDispatch } from 'react-redux';
import {filteredAll,filteredActive} from "../../store/slices/todoSlice";
const Nav = () => {
  const dispatch = useDispatch();


  return (
    <div className={style.button_box}>
      <button onClick={() => dispatch(filteredAll())}>ALL</button>
      <button onClick={() => dispatch(filteredActive())}>Active</button>
      <button >Completed</button>
    </div>
  )
}

export default Nav
