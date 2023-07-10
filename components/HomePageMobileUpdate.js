'use client'
import Slider from "react-slick";
import { mobile_updates, mobile_updates_text } from "@/utilities/utilities";
import Image from "next/image";
import { SampleNextArrow, SamplePrevArrow } from "./CarouselArrows";
import {AiFillStar} from 'react-icons/ai';
import {FaArtstation} from 'react-icons/fa';


const HomePageMobileUpdate = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
      };

  return (
    <section className="bg-white">
        <div className="section-intro container mx-auto flex-between flex-col-reverse md:flex-row">
            <div className=" h-[300px] w-[100%] md:w-[50%] my-8">
                <div className="p-6">
                    {
                        mobile_updates_text.map(item=>{
                            return(
                                <div className="flex space-x-2 mb-4" key={item.name}>
                                    <AiFillStar className="text-[#999] text-[30px]"/>
                                    <h1 className="text-[#293563] font-semibold text-[18px]">{item.text}</h1>
                                </div>
                            )
                        })
                    }
                    <button type='button' className='mt-8 text-[16px] flex items-center  justify-center py-4 shadow-lg hover:shadow-sm hover:bg-[#475dff] transition duration-200 w-[300px]  rounded-2xl bg-white  mb-4 md:mb-0 border-2 border-[#475dff] text-[#475dff] hover:text-white'>
                        <FaArtstation className='rotate-90 mr-2 text-[20px] '/>
                        শিখতে শুরু করো
                    </button>
                </div>

            </div>
            <div className=" h-[100%] w-[100%] md:w-[50%]  my-8 relative z-10">
                <Slider {...settings} className="w-[80%] mx-auto ">
                    
                    {
                        mobile_updates.map(item=>{
                            return (
                                <div className=" " key={item.name}>
                                    <h1 className="text-center block md:hidden text-[#293563] font-bold text-[20px]">{item.title}</h1>
                                    <div className="grid place-items-center h-[70%]">
                                        <Image src={item.image} width={300} height={320} alt="Mobile Image" className="object-cover px-8 md:p-0 h-[100%]"/>
                                    </div>
                                </div>
                                )
                        })
                    }

                </Slider>
                <div className=" bg-gradient-to-r from-[#79B3CD] to-[#17C1EE]  absolute h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] -z-10 rounded-full"></div>
            </div>
        </div>
    </section>
  )
}

export default HomePageMobileUpdate