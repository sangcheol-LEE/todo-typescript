import React,{useCallback} from 'react'
import style from "./Nav.module.scss";
import { useDispatch,useSelector } from 'react-redux';
import {sliceType,} from "../../types/todos";
import {filteredChecked} from "../../store/slices/todoSlice";

const buttons = ["all", "active", "complete"]

const Nav = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:sliceType) => state.todo)

  const getNewData = useCallback((str: string,idx: number) => {
    dispatch(filteredChecked(str))
  },[dispatch,data])

  console.log(data)


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
    </div>
  )
}

export default Nav
