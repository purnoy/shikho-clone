'use client';
import React, { useState } from 'react';
import {FaFacebookMessenger, FaChevronDown, FaArrowLeft} from 'react-icons/fa';
import {BsFillChatRightDotsFill} from "react-icons/bs";


const CommonMessaging = () => {
    const [textPopUp, setTextPopUp] = useState(false);
    const [chatForm, setChatForm] = useState(false);

    const chatboxOpener = ()=>{
        setTextPopUp(true);
    }
    const chatbox = () =>{
        setChatForm(a=>!a);
        setTextPopUp(false);
    }
    
    const chatBoxCloser = () =>{
        setChatForm(a=>!a);
        setTextPopUp(false);
    }
  return (
    <div  className='fixed bottom-6 right-8 sm:bottom-12  z-40 '>
        <div className="">
            {
                (chatForm)?(<div onClick={chatBoxCloser} className={`${!textPopUp && chatForm? 'hidden sm:block' : 'block'} absolute bottom-0 right-0 z-50 bg-[#354895] py-2 px-6 rounded-2xl cursor-pointer shadow-xl text-white font-bold text-[32px]`}>x</div>):(<div onClick={chatboxOpener}  className={`${textPopUp && !chatForm? 'hidden sm:block' : 'block'} absolute bottom-0 right-0 z-50 bg-[#354895] p-4 rounded-2xl cursor-pointer shadow-xl`}><FaFacebookMessenger  className=" text-[25px] sm:text-[30px] text-white"/></div>)
            }
            <div className={`${textPopUp? 'block' : 'hidden'} duration-300 `}>
                <div className={` w-screen bg-yellow-50 sm:w-[380px] absolute -bottom-6 -right-8 sm:bottom-8 sm:right-8 z-20 shadow-2xl sm:rounded-xl p-4`}>
                    <div onClick={()=>setTextPopUp(a=>!a)} className="w-[100%] flex items-center justify-end cursor-pointer">
                        <div className="bg-[#999] rounded-full p-[5px] text-[12px] text-[#354895]">
                            <FaChevronDown/>
                        </div>
                    </div>
                    <h1 className="text-[22px] mb-2">হ্যালো! 👋</h1>
                    <p className="mb-6">আপনাকে কিভাবে সহযোগিতা করতে পারি? 😁</p>
                    <div onClick={chatbox} className="p-4 rounded-lg bg-[#354895] flex items-center cursor-pointer">
                        <BsFillChatRightDotsFill className="text-white me-2"/>
                        <p className="text-white">Chat with us!</p>
                    </div>
                </div>
            </div>
            <div  className={`${chatForm? 'block h-screen  w-screen bg-yellow-50 sm:h-[450px] sm:w-[380px] absolute -bottom-6 -right-8 sm:bottom-10 sm:right-10 z-40 shadow-2xl sm:rounded-xl ': 'hidden'} `}>
                <div  className=" ">
                    <div className="bg-[#354895] w-[100%] rounded-ss-xl rounded-se-xl flex items-center  p-4 text-[14px] text-white">
                        <FaArrowLeft onClick={()=>setChatForm(false)} className='cursor-pointer text-[22px] me-4' />
                        <h2 className=' text-white font-bold text-[18px]'>শিখো ডিজিটাল লার্নিং</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommonMessaging
