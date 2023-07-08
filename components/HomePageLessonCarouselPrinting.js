'use client'
import Link from "next/link";
import Slider from "react-slick";
import ImageModal from "./ImageModal";
import { useContext } from "react";
import { VideoModalContext } from "@/context/VideoModalContext";
import Image from "next/image";
import {AiFillPlayCircle} from 'react-icons/ai';



const HomePageLessonCarouselPrinting = ({item}) => {
    const {recieveModalLink} = useContext(VideoModalContext);
  
  return (
        <div className=" w-[100%] h-[250px] grid hover:-translate-y-4  duration-300  flex-center cursor-pointer" onClick={()=> recieveModalLink(item.link, item.topic)}>
          
          <div className="w-[90%] h-[220px]  bg-white rounded-xl shadow-lg cursor pointer ">
            <div className="w-[100%] h-[60%] rounded-tl-lg rounded-tr-lg overflow-hidden relative ">
              <Image src={item.image} width="200" height="100" className="h-[100%] w-[100%] object-cover" alt="Cover pic"></Image>
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20">
              <AiFillPlayCircle className=" text-white text-opacity-60 text-[40px]"/>  
              </div>
              <div className="absolute bottom-[15px] right-[15px] p-1 bg-white z-20 text-[12px] text-[#354895]">
              {item.category}
              </div>
            </div>
            <div className="text-[#354895] text-[11px] font-semibold px-4 py-4 ">
                {item.for}
              </div>
              <div className="text-[#354895] text-[14px] font-bold px-4">
                {item.topic.substring(0,28)}...
              </div>
          </div>      
        </div>
  )
}

export default HomePageLessonCarouselPrinting
