'use client'
import Link from "next/link";
import Slider from "react-slick";
import ImageModal from "./ImageModal";
import { useContext } from "react";
import { VideoModalContext } from "@/context/VideoModalContext";



const HomePageLessonCarouselPrinting = ({item}) => {
    const {recieveModalLink} = useContext(VideoModalContext);
  
  return (
        <div className=" w-[100%] grid  flex-center cursor-pointer" onClick={()=> recieveModalLink(item.link, item.topic)}>
          
          <div className="w-[90%] h-[230px] bg-white rounded-xl shadow-lg cursor pointer">
            {
              item.for
            }  
          </div>      
        </div>
  )
}

export default HomePageLessonCarouselPrinting
