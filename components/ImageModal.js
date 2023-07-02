'use client'

import { useState } from 'react';
import Image from 'next/image';
import modalImage from '../asset/modal-image.jpg' 
import  Link  from 'next/link';

const ImageModal = () => {
    const [modalHidden, setModalHidden] = useState(true);
  return (
    <div className={`${modalHidden? 'fixed top-0 w-screen  bottom-0 bg-black bg-opacity-50 z-40  max-h-screen flex transition-all duration-1000': 'hidden'}`}>
       <div className="flex-center w-[100%] ">
            <div className="h-[550px] w-[500px] bg-green-100 rounded-lg relative">
                <div className="flex-center flex-col py-4 space-y-2">
                    <Image src={modalImage} width={350} height={350} alt="Modal Image"></Image>
                    <h1 className='text-center text-[20px]'>সারপ্রাইজ স্কলারশিপ 📢</h1>
                    <h3 className='text-center text-[16px]'>ফর্মটি পূরণ করে করে ফেলো <br />এখনি ✨</h3>
                    <Link href='/'>
                    <button type='button' className=' text-[16px]  text-white hover:bg-[#5468ff] flex items-center justify-center py-2 shadow-lg hover:shadow-sm transition duration-200 w-[180px] md:w-[150px] rounded-lg bg-[#cf278d]'>এখানে ক্লিক করো</button>
                    </Link>
                </div>
                <div onClick={()=>setModalHidden(false)} className="absolute text-[15px] -top-[12px] -right-[12px]">
                    <div className="h-[30px] w-[30px] bg-black border-2 border-white rounded-full text-white flex-center cursor-pointer">
                        X
                    </div>
                </div>
            </div>
            
       </div>
       
    </div>
  )
}

export default ImageModal
