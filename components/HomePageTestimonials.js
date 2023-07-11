'use client'
import { testimonial_intro, carousel_testimonials } from "@/utilities/utilities";
import Image from "next/image";
import Slider from "react-slick";
import HomePageTestimonialsReview from "./HomePageTestimonialsReview";

const HomePageTestimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
 
      autoplay: true,
      autoplaySpeed: 2500,
      };

  return (
    <section className="">
        <div className="bg-[#354895] md:bg-white">
            <div className="section-intro container mx-auto relative">
                <div className="bg-[#354895]  rounded-2xl md:shadow-xl">
                    <div className="flex flex-col py-12 px-6 md:flex-row">
                        <div className="md:w-[50%] p-6">
                            <h1 className='text-[40px] mb-2 text-center font-semibold text-white md:text-left'>কেন Shikho-তে আস্থা রাখবে?</h1>
                            <p className='text-[20px] text-[#ededed] text-center md:text-left'>সেরা মেন্টর ও সর্বাধুনিক প্রযুক্তির সাথে সারাদেশের ১০ লক্ষ+ শিক্ষার্থীর মানসম্মত পড়ালেখা ও পরীক্ষা প্রস্তুতির নির্ভরযোগ্য প্রতিষ্ঠান Shikho!</p>
                        </div>
                        <div className="md:w-[50%] flex-center">
                            <div className="grid grid-cols-2  md:flex md:flex-wrap justify-evenly md:justify-end  gap-x-8 gap-y-8">
                            {
                                testimonial_intro.map(item=>{
                                    return(
                                        <div className=" flex p-4 rounded-3xl w-[180px] md:w-[200px] cursor-pointer hover:-translate-y-2 transition duration-300 bg-white" key={item.id} p-8>
                                            <div className="mr-4 flex-center">
                                                <Image src={item.image} height={40} width={40}/>
                                            </div>
                                            <div className="text-[18px] flex-center">{item.copy}</div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                    <div className="h-[250px] hidden md:block">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto relative py-8 p6-4">
            <div className="absolute left-0 bg-red-500 md:rounded-2xl p-4 container  mx-auto">

            <Slider {...settings}>
                {
                    carousel_testimonials.map(item=>{
                        return(
                            <HomePageTestimonialsReview key={item.id} item={item} />
                        )
                    })
                }
            </Slider>
                
            </div>
        </div>
    </section>
  )
}

export default HomePageTestimonials