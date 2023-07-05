'use client';
import { HomePageLessonCarouselContext } from "@/context/HomePageLessonCarouselContext";
import { useContext } from "react";



const HomePageLessonCarousel = () => {

const {newCatNavObj, selectedCat} = useContext(HomePageLessonCarouselContext);


  return (
    <section className="bg-gray-100">
        <div className="section-intro container mx-auto">
            <div className="w-[80%] mx-auto my-6">
                <h1 className='text-center text-[#354895] text-[27px] font-semibold mb-2'>দারুণ সব অ্যানিমেটেড উদাহরণের ভিডিও লেসনে শেখা হবে আরও সহজ</h1>
                <h3 className='text-center text-[#293563] text-[16px] '>সেরা মেন্টরদের তৈরি চমৎকার সব অ্যানিমেটেড উদাহরণ দিয়ে সাজানো ভিডিও লেসন দেখে সহজেই শিখে ক্লাসে-পরীক্ষায় এগিয়ে যাও</h3>
            </div>
            <div className="py-6">
            <div className="flex my-6 border-b-2 border-gray-300 space-x-8">
                {
                  newCatNavObj.map(item=>{
                    return(
                      <div key={item.category} onClick={()=>selectedCat(item)}  className={`${item.status? 'after:w-[100%] ' : 'after:w-[0]'}  relative after:absolute after:bottom-0 after:h-[3px] after:left-0 after:rounded-xl after:bg-[#cf278d] after:z-20  px-1 cursor-pointer after:transition-all after:duration-500  py-4 0`}>
                        <p className='text-[#354895]'>{item.category}</p>
                      </div>
                    )
                  })
                } 
    </div>
            </div>
        </div>
    </section>
  )
}

export default HomePageLessonCarousel