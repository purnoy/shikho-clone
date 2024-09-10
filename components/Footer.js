import Image from "next/image";
import { social, important_links } from "@/utilities/utilities";
import g_play from "@/asset/g_play.png"
import shikho_logo from "@/asset/shikho_logo.svg";
import Link from "next/link";
import {FaPhone, FaEnvelope} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {FaEnvelopeOpen} from "react-icons/tb"
import {BsFillEnvelopeFill} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#d0d8ff] overflow-hidden">
      <div className="py-8 px-4 container border-b-2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="mb-2 flex flex-col justify-around items-start">
              <Image src={shikho_logo} alt="Shikho Logo" width={100} height={100}></Image>
              <p className="text-[#354895] font-semibold text-[14px] ps-2 my-4">শিখো অ্যাপ ডাউনলোড করো! BDBDBD</p>
              <div className ="ms-2 mb-4 p-4 bg-white rounded-lg w-[50%] ">
                <Image src={g_play} alt="Shikho Logo" className="max-auto " width={100} height={100}></Image>
              </div>
              <p className="text-[#354895] font-semibold text-[14px] ps-2 my-2">আমাদের সাথে কানেক্টেড থাকো</p>
              <div className="w-[70%] flex-between ps-2">
                {
                  social.map(item=>{
                    return(
                      <div className="h-[35px] w-[35px] bg-white rounded-lg  text-[22px] flex items-center justify-center " key={item.id}>
                       
                          {item.media}
                        
                      </div>
                    )
                  })
                }
              </div>
          </div>
          <div className="mb-2">
            <p className="text-[#354895] font-semibold text-[16px] ps-2 my-4">লিঙ্ক</p>
              <div className="grid grid-cols-1">
                  <div className="">
                    
                    {
                      important_links.map(item=>{
                        return(
                          <Link href={item.link} className="" key={item.id}>
                            <p className="text-[#354895] text-[13px] ps-2 mb-4">{item.text}</p>
                          </Link>
                        )
                      })
                    }
                  </div>
              </div>
          </div>
          <div className="mb-2">
            <p className="text-[#354895] font-semibold text-[16px] ps-2 my-4">যোগাযোগ</p>
              <div className="grid grid-cols-1">
                  <div className="">
                    
                    <div className="flex justify-between w-[30%] mb-8">
                      <FaPhone className="rotate-90 text-[20px] text-[#2cbbea] "/>
                      <p className="text-[#354895] text-[13px] ps-2 mb-4 ">16780</p>
                    </div>
                    <div className="flex justify-between w-[40%] mb-8">
                      <BsFillEnvelopeFill className=" text-[20px] text-[#354895] "/>
                      <p className="text-[#354895] text-[13px] ps-2 mb-4 ">team@shikho.com</p>
                    </div>
                    <div className="flex justify-between items-center w-[85%]">
                      <HiLocationMarker className="text-[70px] text-[#2cbbea] mr-6 "/>
                      <p className="text-[#354895] text-[13px] ps-2 mb-4 ">Rangs Paramount, Level 11 Block-K, Plot-11 Rd No 17, Dhaka 1213</p>
                    </div>
                  </div>
                  
              </div>
          </div>
          <div className="mb-2">
            <p className="text-[#354895] font-semibold text-[16px] ps-2 my-4">কোম্পানির তথ্য</p>
              <div className="grid grid-cols-1">
                  <div className="">
                    
                    <div className="flex justify-between w-[70%] mb-4">
                      <p className="text-[#354895] text-[13px] ps-2 mb-4 ">Trade licence No:০০০TRAD/DNCC/037245/2022</p>
                    </div>
                    <div className="flex justify-between w-[60%]">
                      <p className="text-[#354895] text-[13px] ps-2 mb-4 ">E-TIN Number : 197682866359</p>
                    </div>

                  </div>
                  
              </div>
          </div>
        </div>
      </div>
      <div className="py-6 container w-[100%] border-b-2 flex flex-col md:flex-row md:justify-between mx-auto">
      <div className="text-[#354895] text-[13px] ps-2 mb-4 ">Terms & Conditions | Refund Policy | Privacy Policy</div>
      <div className="text-[#354895] text-[13px] ps-2 mb-4 ">2023 Shikho Technologies Bangladesh Ltd</div>
        
      </div>
    </div>
  )
}

export default Footer
