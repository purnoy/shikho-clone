
import Navbar from './Navbar';
import Image from 'next/image';


const Header = () => {
  return (
    <header className="w-screen shadow-lg fixed z-20">
        <div className="container mx-auto max-w-6xl flex items-center justify-between p-4">
            <Image src="https://shikho.com/shikho-logo.svg" alt="Shikho Logo" width={100} height={100}></Image>
            <Navbar/>
        </div>
    </header>
  )
}

export default Header
