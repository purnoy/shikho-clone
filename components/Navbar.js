"use client";

import {HiMenu} from "react-icons/hi";
import Link from "next/link";
import { useContext } from "react";
import { NavitemContext } from "@/context/NavigationContext";


const Navbar = () => {
    const {newMenu, management, setIsSideBar} = useContext(NavitemContext);

    
  return (
    <nav className="" >
        {/* Desktop Navigation */}
        <div className="md:flex hidden items-center space-x-7 ">
            <ul className="flex space-x-5 text-[#454c7e] text-[15px]">
            {
                newMenu.map(item=>{
                    return (
                        <li key={item.id} onClick={()=>management(item.id)}>
                            <Link href={item.link}  className={`${item.status? 'text-[#cf278d] ' : ''} hover:text-[#cf278d] transition-all duration-200`}>{item.name}</Link>
                        </li>
                    )
                })
            }
            </ul>
            <button type="button" className="text-[15px]  text-[#5468ff] rounded-lg p-2 px-6 border-2 border-[#5468ff] hover:bg-[#5468ff] hover:text-white transition duration-300">
                লগিন/ সাইন আপ
            </button>
        </div>
        <div className="md:hidden flex" onClick={()=>setIsSideBar(sidebar=>!sidebar)}>
            <HiMenu className="text-[#444] text-[30px] cursor-pointer"/>
        </div>
        
    </nav>
  )
}

export default Navbar
