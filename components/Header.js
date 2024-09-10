'use client'
import { useEffect } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Header = () => {
  useEffect(() => {
    // GTM initialization script
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5CHQ7HW4');
  }, []); // Runs only once after the component mounts

  return (
    <header className={`fixed top-0 left-0 right-0 w-screen shadow-lg  bg-white z-40`} >
      <div className="container mx-auto w-[90%] flex items-center justify-between py-4 px-2 md:px-8">
        <Image src="https://shikho.com/shikho-logo.svg" alt="Shikho Logo" width={100} height={100}></Image>
        <Navbar/>
      </div>
    </header>
  );
}

export default Header;
