import React,{useState,useCallback,useMemo} from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

const Home = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const url = useMemo(() => {
    const ret = checked ? "https://jsonplaceholder.typicode.com/posts/1" : "https://jsonplaceholder.typicode.com/posts/2";
    return ret
  },[checked]);

  const {isLoading, isError, data:products} = useQuery(['products',checked], async() => {
    console.log("....fetching")
    const response = await (await axios.get(url)).data
    return response
  },{
    staleTime: 1000 * 60 * 5,
  })
  const handleChecked = useCallback(() => {
    setChecked((prev) => !prev)
  },[])

  const clicked = async() => {
    try {
      const response = await axios.put(url, {
        completed : true
      }).then((res) => {
        console.log(res)
      })
      return response
    }catch(e) {
      console.log(e)
    }
  }
  console.log("products",products)
  if(isLoading) return <div>Loading</div>
  if(isError)  return <div>{isError}</div>
  return (
    <>
    <div>{url}</div>
    <div>
      <input type="checkbox" checked={checked} onChange={handleChecked}/>
      {products.title}
    </div>
      <div>{`${products.completed}`}</div>
      <button onClick={clicked}>change</button>
    </>
  )
}

export default Home
