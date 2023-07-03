'use client'
import { useState } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';


const Header = () => {

  return (
    <header className={`fixed top-0 left-0 right-0 w-screen shadow-lg  bg-white z-40`} >
        <div className="container mx-auto w-[90%] flex items-center justify-between py-4 px-2 md:px-8">
            <Image src="https://shikho.com/shikho-logo.svg" alt="Shikho Logo" width={100} height={100}></Image>
            <Navbar/>
        </div>
    </header>
  )
}

export default Header
