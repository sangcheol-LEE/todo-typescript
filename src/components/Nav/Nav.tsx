import React,{useMemo} from 'react'
import style from "./Nav.module.scss";
import { useDispatch,useSelector } from 'react-redux';
import {filteredAll,filteredActive,filteredCompleted} from "../../store/slices/todoSlice";
import {sliceType,memoType} from "../../types/todos";


const Nav = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:sliceType) => state?.todo?.todos)
  const newData:memoType = useMemo(() => {
    const ret = {
      main : [],
      active : [],
      complete : []
    }
    if(data) {

    }
    return ret
  },[data])

  console.log("newData",newData)

  return (
    <div className={style.button_box}>
      <button onClick={() => dispatch(filteredAll(data))}>ALL</button>
      <button onClick={() => dispatch(filteredActive(newData))}>Active</button>
      <button onClick={() => dispatch(filteredCompleted(newData))}>Completed</button>

    </div>
  )
}

export default Nav
