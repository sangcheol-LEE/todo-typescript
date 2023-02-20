import React,{useCallback} from 'react'
import style from "./Nav.module.scss";
import { useDispatch,useSelector } from 'react-redux';
import {sliceType,} from "../../types/todos";
import {filteredChecked} from "../../store/slices/todoSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:sliceType) => state.todo)

  const getNewData = useCallback((str: string) => {
    dispatch(filteredChecked(str))
  },[dispatch,data])

  console.log(data)


  return (
    <div className={style.button_box}>
      <button onClick={() =>  getNewData("all")}>ALL</button>
      <button onClick={() => getNewData("active")}>Active</button>
      <button onClick={() => getNewData("complete")}>Completed</button>

    </div>
  )
}

export default Nav
