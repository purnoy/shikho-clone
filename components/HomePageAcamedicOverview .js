'use client'
import Image from "next/image";
import { acamedicOverview } from "@/utilities/utilities";
import { useContext } from "react";
import  {HomePageAcamedicOverviewContext}  from "@/context/HomePageAcamedicOverviewContext";


const HomePageAcamedicOverview  = () => {

    const {academicList, highlightedCourse} = useContext(HomePageAcamedicOverviewContext);

   

  return (
    <section className="bg-academicOverview bg-no-repeat bg-cover">
        <div className="section-intro container mx-auto">
            <div className="w-[60%] md:w-[100%] mx-auto my-12 ">
                <h1 className="text-center text-white font-bold text-[25px] mb-4 md:text-[30px]">Shikho একাডেমিক প্রোগ্রামে যা যা থাকছে</h1>
                <p className="text-center text-gray-300">ক্লাসের পড়ায় ও বোর্ড পরীক্ষার প্রস্তুতিতে সবার চেয়ে এগিয়ে রাখতে এই প্রোগ্রামে রয়েছে -</p>
            </div>
            <div className="flex-center flex-col my-6 sm:hidden">
                {
                    acamedicOverview.map((elm)=>{
                        return(
                            <div key={elm.id}>
                                <div className="flex-center mb-4" >
                                    <span className="mr-4">
                                        <Image src={elm.logo} width={40} height={40} alt="Section Header Logo" ></Image>
                                    </span>
                                    <h3 className="text-white text-[18px]">{elm.title}</h3>
                                </div>
                                <div className="mb-8" >
                                    {
                                        <Image src={elm.image} width={600} height={450} alt="Course Overview Image" className="object-cover rounded-xl"></Image>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="hidden sm:block ">
                <div className="flex-between space-x-12">
                    {
                        <div className=" w-[37%] flex flex-col space-y-4">
                        {
                            academicList.map((elm)=>{
                                return(
                                    <div className="hover:-translate-y-0.5 transition duration-300 relative z-20 " key={elm.id} onClick={()=>highlightedCourse(elm.id)}>
                                        <div  className={`${elm.status===true? ' border-[#c84bae] border-4 ' : ''} bg-white flex items-cente py-3 px-4 md:px-12  rounded-xl cursor-pointer`}>
                                            <div className="mr-4">
                                                <Image src={elm.logo} width={44} height={40} alt="Acamdeic Logo"></Image>
                                            </div>
                                            <div className={`${elm.status===true? 'absolute top-[50%] -translate-y-1/2 border-r-4 border-t-4 border-[#c84bae] -right-[17px]  bg-white h-[36px] w-[36px] rounded-tr-md rotate-45 ' : 'hidden'}`}></div>
                                            <div className="text-[16px] md:text-[16px] flex-center">
                                                {elm.title}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    }
                    <div className="w-[63%]  flex  justify-center ">
                        {
                            academicList.map((elm)=>{
                                return(
                                    <div className=" rounded-xl overflow-hidden h=[100%]" key={elm.id}>
                                        {
                                            elm.status? <Image src={elm.image} width={900} height={900} alt="Image" className="object-fit"></Image> : <span></span>
                                        }
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePageAcamedicOverview 