import React from 'react'
import { useParams } from 'react-router-dom'

const VideoDetail = () => {
   const params = useParams();
   console.log(params)



  return (
    <div>
      VideoDetail
    </div>
  )
}

export default VideoDetail
