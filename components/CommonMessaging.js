'use client';
import React, { useState } from 'react';
import {FaFacebookMessenger, FaChevronDown} from 'react-icons/fa';
import {BsFillChatRightDotsFill} from "react-icons/bs";


const CommonMessaging = () => {
    const [textPopUp, setTextPopUp] = useState(false);
    const [chatForm, setChatForm] = useState(false);
  return (
    <div  className='fixed bottom-6 right-8 sm:bottom-12  z-40 '>
        <div className="">
            <div onClick={()=>setTextPopUp(a=>!a)} className={`${textPopUp? 'hidden sm:block' : 'block'} absolute bottom-0 right-0 z-30 bg-[#354895] p-4 rounded-2xl cursor-pointer shadow-xl`}>
                <FaFacebookMessenger className=" text-[25px] sm:text-[30px] text-white"/>
            </div>
            <div className={`${textPopUp? 'block' : 'hidden'} duration-300 `}>
                <div className={` w-screen bg-yellow-50 sm:w-[380px] absolute -bottom-6 -right-8 sm:bottom-8 sm:right-8 z-20 shadow-2xl sm:rounded-xl p-4`}>
                    <div onClick={()=>setTextPopUp(a=>!a)} className="w-[100%] flex items-center justify-end cursor-pointer">
                        <div className="bg-[#999] rounded-full p-[5px] text-[12px] text-[#354895]">
                            <FaChevronDown/>
                        </div>
                    </div>
                    <h1 className="text-[22px] mb-2">হ্যালো! 👋</h1>
                    <p className="mb-6">আপনাকে কিভাবে সহযোগিতা করতে পারি? 😁</p>
                    <div className="p-4 rounded-lg bg-[#354895] flex items-center cursor-pointer">
                        <BsFillChatRightDotsFill className="text-white me-2"/>
                        <p className="text-white">Chat with us!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommonMessaging
