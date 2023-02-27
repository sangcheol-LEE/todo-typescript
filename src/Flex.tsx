import React from 'react'
import style from "./Flex.module.scss";
import pencil from "./image/good.jpg";
const Flex = () => {
  return (
    <div className={style.wrap}>
       <div className={style.container}>
         <div className={style.name}>디바이스 닉네임</div>
         <div className={style.box}>
            <img className={style.image} src={pencil} alt="logo"/>
            <p>texttexttexttexttexttexttexttexttext<br /> texttexttexttexttexttexttexttexttext</p>
         </div>
         <button className={style.btn}>확인</button>
       </div>
    </div>
  )
}

export default Flex
