'use client'
import {BiSolidQuoteSingleRight} from 'react-icons/bi';
import Image from 'next/image';
import {BsPlayCircleFill} from 'react-icons/bs';
import { VideoModalContext } from '@/context/VideoModalContext';
import { useContext } from 'react';

const HomePageTestimonialsReview = ({item}) => {
  const {recieveModalLink} = useContext(VideoModalContext);
  return (
    <div className="border-2 border-[#ededed] mx-4 md:mx-0 md:border-white rounded-2xl ">
      <div className="relative block md:hidden">
        <div className="mb-4 p-4">
            <h1 className="text-[#354895] font-semibold ps-4">{item.name}</h1>
            <p className="text-[12px] text-[#999] ps-4 mb-8">{item.grade}</p>
            <p className="text-[#999] text-[16px]">{item.comment}</p>
        </div>
        <div className="flex justify-end">
          <div className="flex text-[#354895] text-[50px]">
            <BiSolidQuoteSingleRight classname=""/>
          </div>
          <div className="flex text-[#cf278d] text-[50px]  -ml-6">
            <BiSolidQuoteSingleRight classname=""/>
          </div>
        </div>
      </div>
      <div className="hidden md:block ">
        <div className="flex justify-around items-center  py-8">
          <div className="w-[50%]">
            <div className="flex justify-start">
              <div className="flex text-[#354895] text-[50px]">
                <BiSolidQuoteSingleRight classname=""/>
              </div>
              <div className="flex text-[#cf278d] text-[50px]  -ml-6">
                <BiSolidQuoteSingleRight classname=""/>
              </div>
            </div>
            <div className="mb-4 p-4">
              <p className="text-[#999] text-[16px] mb-8">{item.comment}</p>

              <h1 className="text-[#354895] font-semibold ps-4">{item.name}</h1>
              <p className="text-[12px] text-[#999] ps-4">{item.grade}</p>
            </div>
          </div>
          <div onClick={()=> recieveModalLink(item.link, item.topic)}  className="w-[50%] p-6 cursor-pointer relative  ">
            <div className="flex justify-end rounded-xl overflow-hidden  relative">
              <Image src={item.image} height={500} width={500} alt="Image" className='h-[90%] w-[100%] hover:scale-110   duration-300 object-cover  '></Image>
              <div className="absolute top-0 left-0 w-[100%] h-[100%] z-20 bg-slate-50 opacity-30"></div>
            </div>
           <div className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30 text-[40px] text-[#5468ff]">
            <BsPlayCircleFill className='wave'/>
           </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePageTestimonialsReview