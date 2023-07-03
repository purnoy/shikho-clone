"use client"
import { NavitemContext } from '@/context/NavigationContext';
import React from 'react';
import { useContext } from 'react';
import {GoArrowRight} from 'react-icons/go';
import Link from "next/link";



const MobileNavigation = () => {
    const {isSideBar, setIsSideBar, newMenu, management } = useContext(NavitemContext);
  return (
    <nav className={`${isSideBar? 'right-0' : '-right-[100%]'} fixed top-0 w-[100%]   bottom-0 bg-[#354895] z-50  max-h-screen flex md:hidden transition-all duration-1000`}>
        <div className=" w-[100%] p-12  ">
            <div className="flex justify-end mb-4">
                <GoArrowRight onClick={()=>setIsSideBar(false)} className='text-white text-[35px] cursor-pointer'/>
            </div>
          <div className="">
            <ul className="flex flex-col justify-start gap-4 text-white text-[22px] mb-8">
              {
                  newMenu.map(item=>{
                      return (
                          <li key={item.id} onClick={()=>management(item.id)} >
                              <Link href={item.link}  className={`${item.status? 'text-[#cf278d] ' : ''} hover:text-[#cf278d] transition-all duration-200`}>{item.name}</Link>
                              <hr className="bg-[#8780ff]" />
                          </li>
                          
                      )
                  })
              }
              </ul>
              <button type="button" className="text-[18px] bg-[#cf278d]  text-white rounded-lg p-4 block w-[100%] hover:border-2 hover:bg-transparent  hover:border-white transition duration-300">
                লগিন/ সাইন আপ
            </button>
          </div>

        </div>
    </nav>
  )
}

export default MobileNavigation;
