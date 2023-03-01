import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { inputFunc,changeFunc } from '../types/video';
const Videos = () => {
   const [text, setText] = useState<string>("");
   const navigate = useNavigate();

   const handleChange:inputFunc = (e) => {
      setText((prev : string) => {
         prev = e.target.value
         return prev
      })
   }

   const handleSubmit:changeFunc = (e) => {
      e.preventDefault()
      setText((prev) => {
         prev = "";
         return prev
      })
      navigate(`${text}`)
   }

  return (
    <div>
       Videos
       <form onSubmit={handleSubmit}>
          <input placeholder="video id:" type="text" value={text} onChange={handleChange}/>
       </form>
    </div>
  )
}

export default Videos
