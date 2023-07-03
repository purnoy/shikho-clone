import Image from "next/image";
import classEight from '../asset/whiteboard-8.png';
import classNine from '../asset/whiteboard-9.webp'
import classTen from '../asset/whiteboard-10.webp'
import classEleven from '../asset/whiteboard-11.webp'
import Link from "next/link";

const HomePageCourseIntro = () => {
  return (
    <section className=" section-intro bg-gray-100 md:bg-white relative ">
        <div className="container mx-auto flex-center flex-col">
            <div className="w-[70%] md:w-[100%] my-4 md:mt-6">
                <h1 className="text-center text-[#354895] font-bold text-[22px] md:text-[30px]">মাধ্যমিক ও উচ্চমাধ্যমিকের পড়ালেখা এবং পরীক্ষা প্রস্তুতির পূর্ণাঙ্গ প্রোগ্রাম</h1>
                <p className="text-center">বছরজুড়ে দেশসেরা মেন্টরদের লাইভ ক্লাস, লাইভ এক্সাম, ক্লাস নোট, অ্যানিমেটেড ভিডিও-তে A+ প্রস্তুতি নাও</p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 w-[100%]">
               
                <Link href="/course">
                    <div className=" cursor-pointer w-[100%] h-[100px] sm:h-[400px] relative z-20 hover:-translate-y-1.5 transition duration-300">
                        <div className="flex items-center sm:flex-center sm:flex-col sm:justify-center sm:h-[100%]">
                            <Image src={classEight} width={100} height={100} alt="Class 8 Course" className="mr-4 sm:mr-0  mb-4 sm:mb-0 cursor-pointer"/>
                            <p className="text-white font-bold">ক্লাস ৮</p>
                        </div>
                        <div className="absolute bg-gradient-to-b from-[#ed9511] to-[#c1750d] top-[50%] -translate-y-1/2 h-[60%] sm:[h-100%] w-[100%] rounded-lg shadow-sm -z-10 ">
                        </div>
                    </div>
                </Link>
                
                <Link href="/course">
                    <div className=" cursor-pointer w-[100%] h-[100px] sm:h-[400px] relative z-20 hover:-translate-y-1.5 transition duration-300">
                        <div className="flex items-center sm:flex-center sm:flex-col sm:justify-center sm:h-[100%]">
                            <Image src={classNine} width={100} height={100} alt="Class 8 Course" className="mr-4 sm:mr-0  mb-4 sm:mb-0 "/>
                            <p className="text-white font-bold">৯ম - বিজ্ঞান</p>
                        </div>
                        <div className="absolute bg-gradient-to-b from-[#2dadf5] to-[#2e46ff] top-[50%] -translate-y-1/2 h-[60%] sm:[h-100%] w-[100%] rounded-lg shadow-sm -z-10">
                            
                        </div>
                    </div>
                </Link>
                <Link href="/course">
                    <div className=" cursor-pointer w-[100%] h-[100px] sm:h-[400px] relative z-20 hover:-translate-y-1.5 transition duration-300">
                        <div className="flex items-center sm:flex-center sm:flex-col sm:justify-center sm:h-[100%]">
                            <Image src={classTen} width={100} height={100} alt="Class 8 Course" className="mr-4 sm:mr-0  mb-4 sm:mb-0"/>
                            <p className="text-white font-bold">১০ম - বিজ্ঞান</p>
                        </div>
                        <div className="absolute bg-gradient-to-b from-[#c84bae] to-[#694da8] top-[50%] -translate-y-1/2 h-[60%] sm:[h-100%] w-[100%] rounded-lg shadow-sm -z-10">
                            
                        </div>
                    </div>
                </Link>
                <Link href="/course">
                    <div className=" cursor-pointer w-[100%] h-[100px] sm:h-[400px] relative z-20 hover:-translate-y-1.5 transition duration-300">
                        <div className="flex items-center sm:flex-center sm:flex-col sm:justify-center sm:h-[100%]">
                            <Image src={classEleven} width={100} height={100} alt="Class 8 Course" className="mr-4 sm:mr-0  mb-4 sm:mb-0"/>
                            <p className="text-white font-bold">১১শ - বিজ্ঞান</p>
                        </div>
                        <div className="absolute bg-gradient-to-b from-[#d54a5d] to-[#aa4335] top-[50%] -translate-y-1/2 h-[60%] sm:[h-100%] w-[100%] rounded-lg shadow-sm -z-10">
                            
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default HomePageCourseIntro