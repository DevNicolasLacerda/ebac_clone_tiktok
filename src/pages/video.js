import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/videoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import './video.css'


function Video({ likes, messages, shares, name, description, music, url }) {

  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

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
        src={url}
      ></video>
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VideoFooter 
        name={name}
        description={description}
        music={music}
      />
    </div>
  )
}

export default Video