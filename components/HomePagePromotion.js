import Image from "next/image";
import video from '@/asset/video.webp';
import {BsFillPlayCircleFill} from 'react-icons/bs';


const HomePagePromotion = () => {
  return (
    <section className="bg-[#f3f3f3]">
        <div className="py-16 px-8 container mx-auto flex items-center justify-between flex-col-reverse md:flex-row">
            <div className="w-[100%] md:w-[50%] flex-center flex-col py-12 ">
                <div className="w-[90%] bg-[red] flex-center rounded-xl overflow-hidden cursor-pointer hover:scale-110 transition duration-300 mb-6 relative">
                    <Image src={video} width={400} height={350} className="object-cover w-[100%]" alt="Video"/>
                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                    <BsFillPlayCircleFill className="text-[80px] text-white opacity-80"/>
                    </div>
                </div>
                <button type='button' className='md:hidden mt-8 text-[16px] flex items-center  justify-center py-4 shadow-lg hover:shadow-sm transition duration-200 w-[300px]  rounded-2xl b  mb-4 md:mb-0  hover: bg-[#475dff] text-white hover:bg-[#d63384]'>
                        
                        আমাদের সম্পর্কে জেনে নাও
                    </button>
            </div>

            <div className="w-[100%] md:w-[50%] p-6 md:ms-12 flex items-center  md:items-start justify-between flex-col">
                <h1 className="  text-[#354895] font-bold text-center md:text-left text-[35px] mb-4">
                    Shikhoর সাথেই শিখছে <br/>সবাই, জিতছে সবাই
                </h1>
                <p className="text-[#354895] text-center md:text-left">এখন তুমি যেখানেই থাকো, ম্যাটার করে না কিছুই! কারণ সবাই শিখছে আর জিতছে দেশের সবচেয়ে নির্ভরযোগ্য ডিজিটাল লার্নিং প্রতিষ্ঠান শিখোর সাথে। কিন্তু কীভাবে? জানতে পাশে ভিডিওটি দেখে চঞ্চল চৌধুরীর কাছ থেকেই জেনে নাও!</p>
                <button type='button' className=' hidden  md:block mt-8 text-[16px]  py-4 shadow-lg hover:shadow-sm transition duration-200 w-[300px]  rounded-2xl b  mb-4 md:mb-0  hover: bg-[#475dff] text-white hover:bg-[#d63384]'>
                        
                        আমাদের সম্পর্কে জেনে নাও
                    </button>
            </div>
        </div>
    </section>
  )
}

export default HomePagePromotion