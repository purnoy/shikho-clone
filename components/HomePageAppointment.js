import React from 'react';
import Image from 'next/image';
import appointmentImage from '@/asset/appointment.webp';

const HomePageAppointment = () => {
  return (
    <section className="bg-[#354895]  flex md:justify-between justify-center items-center ">
       <div className='container mx-auto'>
            <div className=" flex items-end justify-around w-[100%]">
                <div className="flex items-center  w-[100%] md:w-[50%]  px-8 p-8 md:py-16">
                    <div className="bg-gray-200 flex items-center justify-center  w-[100%] md:w-[90%] lg:w-[70%] rounded-2xl shadow-lg">
                        <form action="" className='p-6'>
                            <h1 className='text-[22px] text-[#354895] font-semibold mb-10'>ফ্রি পরামর্শ পেতে অ্যাপয়েন্টমেন্ট বুক করো</h1>
                            <label for="fname" required className='text-[#354895] text-[16px] '>তোমার নাম</label><br />
                            <input className='p-4 rounded-lg w-[100%] focus:outline-none focus:border-2 mb-6 focus:border-[#d63384] duration-200' type="text" id="name" name="name" placeholder='নামে লেখো'/><br />
                            <label for="phone" className='text-[#354895] text-[16px]'>তোমার মোবাইল নম্বর</label><br />
                            <input type="number" id="phone" name="phone" placeholder='মোবাইল নম্বর দাও' className=' mb-6 p-4 rounded-lg w-[100%] focus:outline-none focus:border-2 focus:border-[#d63384] duration-20' /><br /><br />
                            <input type="submit" className='cursor-pointer  text-[16px]  py-4 shadow-lg hover:shadow-sm transition duration-200 w-[100%]  rounded-2xl b  mb-4 md:mb-0  hover: bg-[#475dff] text-white hover:bg-[#d63384]' value="Submit"/>
                        </form>
                    </div>
                </div>
                <div className=" w-[50%] hidden md:flex md:items-end md:justify-end">
                    <div className="w-[100%] h-[100%]">
                        <Image src={appointmentImage} width={800} height= {800} alt="Image" className=""></Image>
                    </div>
                </div>
            </div>
  
        </div>
    </section>
  )
}

export default HomePageAppointment