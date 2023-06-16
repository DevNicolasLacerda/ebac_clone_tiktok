import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/videoFooter'
import './video.css'

function Video() {

  const videoRef = useRef(null)
  const [ play, setPlay ] = useState(false)

  function handleStart() {
    if (play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className='video'>
      <video 
          className='videoPlayer'
          ref={videoRef}
          onClick={handleStart}
          loop
          src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'
      ></video>
      {/* Sidebar */}
      <VideoFooter />
    </div>
  )
}

export default Video