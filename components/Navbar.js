import { menu } from "@/utilities/utilities";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-7">
        <div className="flex space-x-5 text-[#454c7e] text-[15px]">
        {
            menu.map(item=>{
                return <Link key={item.id} href={item.link}>{item.name}</Link>
            })
        }
        </div>
        <button type="button" className="text-[15px] text-[#5468ff] rounded-lg p-2 px-6 border-2 border-[#5468ff] hover:bg-[#5468ff] hover:text-white transition duration-300">
            লগিন/ সাইন আপ
        </button>
    </nav>
  )
}

export default Navbar
