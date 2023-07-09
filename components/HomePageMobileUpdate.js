'use client'
import Slider from "react-slick";
import { mobile_updates, mobile_updates_text } from "@/utilities/utilities";
import Image from "next/image";
import { SampleNextArrow, SamplePrevArrow } from "./CarouselArrows";


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
        <div className="section-intro container mx-auto flex-between flex-col md:flex-row">
            <div className="bg-red-500 h-[300px] w-[100%] md:w-[50%] my-8"></div>
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
                <div className="bg-red-500 absolute h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] -z-10 rounded-full">hihh</div>
            </div>
        </div>
    </section>
  )
}

export default HomePageMobileUpdate