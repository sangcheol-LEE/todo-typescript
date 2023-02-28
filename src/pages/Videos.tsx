import React,{useState} from 'react'

const Videos = () => {
   const [text, setText] = useState<string>("");

   interface inputFunc {
      (e: React.ChangeEvent<HTMLInputElement>) : void
   }

   interface changeFunc {
      (e:React.ChangeEvent<HTMLFormElement>) : void
   }

   const handleChange:inputFunc = (e) => {
      setText((prev : string) => {
         prev = e.target.value
         return prev
      })
   }

   const handleSubmit:changeFunc = (e) => {
      e.preventDefault()
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
