'use client'
import { createContext, useState } from "react";


export const VideoModalContext = createContext(); 

const VideoModalProvider = ({children}) => {
  
    const [videoModal, setVideoModal] = useState(false);
    const [modalLink, setModalLink] = useState({});
    const recieveModalLink = (link, topic) =>{
      setVideoModal(a=>!a);
      setModalLink({link, topic});
    }
    console.log(modalLink);
  return (
    <VideoModalContext.Provider value={{videoModal, setVideoModal, recieveModalLink, modalLink}}>
      {children}
    </VideoModalContext.Provider>
  )
}

export default VideoModalProvider;
