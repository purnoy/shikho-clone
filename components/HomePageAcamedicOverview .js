import Image from "next/image";
import { acamedicOverview } from "@/utilities/utilities";

const HomePageAcamedicOverview  = () => {
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
                            <>
                                <div className="flex-center mb-4" key={elm.id}>
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
                            </>
                        )
                    })
                }
            </div>
            <div className="hidden sm:block ">
                <div className="flex-between space-x-12">
                    {
                        <div className=" w-[37%] flex flex-col space-y-4">
                        {
                            acamedicOverview.map((elm)=>{
                                return(
                                    <div className="flex items-center bg-white px-12 py-6 hover:-translate-y-1 transition duration-300 rounded-xl cursor-pointer">
                                        <div className="mr-4">
                                            <Image src={elm.logo} width={40} height={40} alt="Acamdeic Logo"></Image>
                                        </div>
                                        <div className="text-[20px] text-[#354895]">
                                            {elm.title}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    }
                    <div className="bg-green-500 w-[63%]">
                        5
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePageAcamedicOverview 