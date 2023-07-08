'use client'
import { VideoModalContext } from '@/context/VideoModalContext';
import React, { useContext, useState } from 'react';

const VideoModal = () => {
    const {videoModal, modalLink, setVideoModal} = useContext(VideoModalContext);
    
  return (
    <div className={`${videoModal? ' fixed top-0 left-0 right-0 h-[100vh] w-[100vw] bg-black bg-opacity-70 z-50' : 'hidden'}`}>
        <div className="grid place-items-center w-[100%] h-[100%]">
          <div className="h-[70%] w-[50%]  bg-white opacity-1 relative rounded-xl p-6">
            <div className=" h-[100%] w-[100%] flex-center flex-col">
              <iframe width="90%" height="70%" src={modalLink.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div className="">
                <h1 className='text-[30px] font-semibold pt-6'>{modalLink.topic}</h1>
              </div>
            </div>
            <div className="absolute -top-[15px] -right-[15px] h-[30px] w-[30px] rounded-full border-white border-2 bg-black ">
              <p className='text-white text-center text-[20px] cursor-pointer' onClick={()=>setVideoModal(a=>!a)}>x</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VideoModal
