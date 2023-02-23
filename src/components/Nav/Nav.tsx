import React,{useCallback} from 'react'
import style from "./Nav.module.scss";
import { useDispatch,useSelector } from 'react-redux';
import {sliceType,} from "../../types/todos";
import {filteredChecked,getDarkMode} from "../../store/slices/todoSlice";
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";

const buttons = ["all", "active", "complete"]

const Nav = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:sliceType) => state.todo)
  const darkMode = useSelector((state:sliceType) => state.todo.isDarkMode)
  const getNewData = useCallback((str: string,idx: number) => {
    dispatch(filteredChecked(str))
  },[dispatch,data])

  console.log("darkMode",darkMode)


  return (
    <div className={style.header} >
      <ul className={style.filters}>
        {buttons.map((item,idx) => (
          <li key={idx}>
            <button
              className={`${style.filter}`}
              onClick={() => getNewData(item,idx)}
              >{item.toUpperCase()}</button>
          </li>
        ))}
      </ul>

      <div className={style.darkmode_icon} onClick={() => dispatch(getDarkMode())}>
        {
          darkMode ? <BsFillMoonFill /> : < BsFillSunFill/>}
      </div>
    </div>
  )
}

export default Nav
