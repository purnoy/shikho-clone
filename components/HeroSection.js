
import React from 'react'
import  Image from 'next/image';
import heroImg from '@/asset/heroImg.webp';
import {FaArtstation} from 'react-icons/fa';


const HeroSection = () => {
  return (
    <section className="">
      <div className='bg-hero md:h-[92vh]  bg-no-repeat bg-cover'>
        <div className="container mx-auto pt-32 md:pt-8 h-[100%]">
          <div className="flex  flex-col md:flex-row  justify-start md:justify-between items-center h-[100%]   px-8 md:px-2 ">
            <div className="flex flex-col justify-start md:justify-center center md:items-start  h-[80%]">
              <h1 className="text-white  text-[2.2rem] mb-4 md:text-left text-center tracking-tight">Shikho একাডেমিক প্রোগ্রাম <br />SSC-HSC’র A+ প্রস্তুতি এখানেই</h1>
              <h2 className='md:text-left text-center text-[#ededed] md:text-[22px] mb-4 tracking-tight'>নবম থেকে দ্বাদশ শ্রেণি পর্যন্ত শিক্ষার্থীদের সারাবছর
                <br />পড়ালেখার কমপ্লিট সল্যুশন</h2>
              <div className="flex justify-center md:justify-start">
                  <button type='button' className=' text-[14px] flex items-center  justify-center py-4 shadow-lg hover:shadow-sm transition duration-200 w-[180px] md:w-[200px]  rounded-lg bg-white mr-4 text-[#cf278d] hover:text-[#5468ff]'>
                    <FaArtstation className='rotate-90 mr-2 text-[20px] '/>
                    শিখতে শুরু করো
                  </button>
                  <button type='button' className=' text-[14px]  text-white hover:bg-[#5468ff] flex items-center justify-center py-4 shadow-lg hover:shadow-sm transition duration-200 w-[180px] md:w-[200px] rounded-lg bg-[#cf278d]'>একাডেমিক প্রোগ্রাম দেখো</button>
                </div>
            </div>
            <div className="flex justify-end h-[100%]">
              <Image src={heroImg} width={700} height={700} className="object-cover" alt="Hero Image pt-32 md:pt-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl container mx-auto w-[90vw] md:w-[80vw] md:-mt-[75px] relative z-10 md:shadow-lg">
        <div className="py-[40px] grid grid-cols-2 md:grid-cols-4 ">
          <div className="flex-center my-2">
            <div className="flex-start flex-col">
              <h1 className="text-[30px] text-[#FF6E76] font-semibold">
                ২৫ লক্ষ+
              </h1>
              <h3 className="text-[#34364b]">শিক্ষার্থী</h3>
            </div>
          </div>
          <div className="flex-center my-2">
            <div className="flex-start flex-col">
                <h1 className="text-[30px] text-[#3DAFFD] font-semibold">
                ৫০ জন+
                </h1>
                <h3 className="text-[#34364b]">অভিজ্ঞ মেন্টর</h3>
            </div>
          </div>
          <div className="flex-center my-2">
            <div className="flex-start flex-col">
              <h1 className="text-[30px] text-[#00B19E] font-semibold">
                ১০ লক্ষ+
              </h1>
              <h3 className="text-[#34364b]">অ্যাপ ডাউনলোড</h3>
            </div>
          </div>
          <div className="flex-center my-2">
            <div className="flex-start flex-col">
              <h1 className="text-[30px] text-[#EAA819] font-semibold">
                ১.৮ লক্ষ+
              </h1>
              <h3 className="text-[#34364b]">
                লার্নিং ম্যাটেরিয়াল</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
