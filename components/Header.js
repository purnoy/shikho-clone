
import Navbar from './Navbar';
import Image from 'next/image';


const Header = () => {
  return (
    <header className="w-screen shadow-lg fixed bg-white z-20">
        <div className="container mx-auto w-[90%] flex items-center justify-between py-4 px-2 md:px-8">
            <Image src="https://shikho.com/shikho-logo.svg" alt="Shikho Logo" width={100} height={100}></Image>
            <Navbar/>
        </div>
    </header>
  )
}

export default Header
