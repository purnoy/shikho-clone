import Image from "next/image";
import classEight from '../asset/whiteboard-8.png';
import classNine from '../asset/whiteboard-9.webp'
import classTen from '../asset/whiteboard-10.webp'
import classEleven from '../asset/whiteboard-11.webp'
import Link from "next/link";

const HomePageCourseIntro = () => {
  return (
    <section className="section-intro bg-gray-100 md:bg-white relative ">
        <div className="container mx-auto flex-center flex-col">
            <div className="w-[70%] md:w-[100%]  md:mt-6">
                <h1 className="text-center text-[#354895] font-bold text-[22px] md:text-[30px]">মাধ্যমিক ও উচ্চমাধ্যমিকের পড়ালেখা এবং পরীক্ষা প্রস্তুতির পূর্ণাঙ্গ প্রোগ্রাম</h1>
                <p className="text-center hidden sm:block">বছরজুড়ে দেশসেরা মেন্টরদের লাইভ ক্লাস, লাইভ এক্সাম, ক্লাস নোট, অ্যানিমেটেড ভিডিও-তে A+ প্রস্তুতি নাও</p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 w-[100%] py-16 ">
                <Link href="/course">
                    <div className=" cursor-pointer w-[100%] h-[100px] sm:h-[250px] relative bg-gradient-to-b from-[#ed9511] to-[#c1750d] rounded-lg shadow-sm hover:-translate-y-1.5 transition duration-300">
                        <div className="flex items-center sm:justify-center justify-start sm:flex-col sm:h-[100%]">
                            <Image src={classEight} width={100} height={100} alt="Class 8 Course" className="mr-2 sm:mr-0 p-6 sm:p-4 md:p-2 lg:p-0 object-fit mb-0 sm:mb-4 cursor-pointer"/>
                            <p className="text-white text-[16px] ">ক্লাস - ৮</p>
                        </div>
  
                    </div>
                </Link>
                
                <Link href="/course">
                        <div className=" cursor-pointer w-[100%] h-[100px] sm:h-[250px] relative bg-gradient-to-b from-[#2dadf5] to-[#2e46ff] rounded-lg shadow-sm hover:-translate-y-1.5 transition duration-300">
                            <div className="flex items-center sm:justify-center justify-start sm:flex-col sm:h-[100%]">
                            <Image src={classNine} width={100} height={100} alt="Class 8 Course" className="mr-2 sm:mr-0 p-6 sm:p-4 md:p-2 lg:p-0 object-fit  mb-0 sm:mb-4 cursor-pointer"/>
                            <p className="text-white text-[16px] ">৯ম - বিজ্ঞান</p>
                        </div>

                    </div>
                </Link>
                <Link href="/course">
                    <div className=" cursor-pointer w-[100%] h-[100px] sm:h-[250px] relative bg-gradient-to-b from-[#c84bae] to-[#694da8] rounded-lg shadow-sm hover:-translate-y-1.5 transition duration-300">
                            <div className="flex items-center sm:justify-center justify-start sm:flex-col sm:h-[100%]">
                            <Image src={classTen} width={100} height={100} alt="Class 8 Course" className="mr-2 sm:mr-0 p-6 sm:p-4 md:p-2 lg:p-0 object-fit  mb-0 sm:mb-4 cursor-pointer"/>
                            <p className="text-white text-[16px] ">১০ম - বিজ্ঞান</p>
                        </div>

                    </div>
                </Link>
                <Link href="/course">
                    <div className=" cursor-pointer w-[100%] h-[100px] sm:h-[250px] relative bg-gradient-to-b from-[#d54a5d] to-[#aa4335] rounded-lg shadow-sm hover:-translate-y-1.5 transition duration-300">
                            <div className="flex items-center sm:justify-center justify-start sm:flex-col sm:h-[100%]">
                            <Image src={classEleven} width={100} height={100} alt="Class 8 Course" className="mr-2 sm:mr-0 p-6 sm:p-4 md:p-2 lg:p-0 object-fit  mb-0 sm:mb-4 cursor-pointer"/>
                            <p className="text-white text-[16px] ">১১শ - বিজ্ঞান</p>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default HomePageCourseIntro