"use client"
import { createContext, useEffect } from "react";
import { menu } from "@/utilities/utilities";
import {usePathname} from 'next/navigation';
import { useState } from "react";

export const NavitemContext = createContext();

const NavitemProvider = ({children}) => {
    const pathName = usePathname();
    const [newMenu, setNewMenu] = useState(menu);
    const [isSideBar, setIsSideBar] = useState(false);

console.log(isSideBar);
    const management = (id) =>{
        let menuNew = [];
        menu.find((elm,a)=>{
            if(elm.id===id){
                menu[a] = {...elm, status:true};
                menuNew.push(menu[a]);
            }
            else{
                menu[a] = {...elm, status: false};
                menuNew.push(menu[a]);
            }
            
        });
        setNewMenu(menuNew);
    }
    useEffect(()=>{
        
        let menuNew = [];
        menu.find((elm,a)=>{
            if(pathName ===elm.link){
                menu[a] = {...elm, status:true}
                menuNew.push(menu[a]);
            }
            else{
                menu[a] = {...elm, status:false}
                menuNew.push(menu[a]);
            }  
        })
        setNewMenu(menuNew);

    }, [window.onload])

  

  return (
    <NavitemContext.Provider value={{newMenu, management, setIsSideBar, isSideBar  }}>
      {children}
    </NavitemContext.Provider>
  )
}

export default NavitemProvider
