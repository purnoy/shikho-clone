"use client";
import { menu } from "@/utilities/utilities";
import {FaBars} from "react-icons/fa";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import { useState } from "react";

const Navbar = () => {
    const pathName = usePathname();
    const [newMenu, setNewMenu] = useState(menu);
console.log(newMenu);
    const management = (id) =>{
        let menuNew = [];
        menu.find((elm,a)=>{
            if(elm.id===id){
                menu[a] = {...elm, status:true};
            }
            else{
                menu[a] = {...elm, status: false};
            }
            menuNew.push(menu[a]);
        });
        setNewMenu(menuNew);
    }
    window.onload = () =>{
        let menuNew = [];
        menu.find((elm,a)=>{
            if(pathName ===elm.link){
                menu[a] = {...elm, status:true}
            }
            else{
                menu[a] = {...elm, status:false}
            }
            menuNew.push(menu[a]);
            
        })
        setNewMenu(menuNew);
    }
  return (
    <nav className="">
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
        <div className="md:hidden flex">
            <FaBars/>
        </div>
    </nav>
  )
}

export default Navbar
