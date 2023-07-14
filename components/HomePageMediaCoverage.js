'use client';
import { media_coverage } from "@/utilities/utilities";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const HomePageMediaCoverage = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        dots: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {

                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              },
              breakpoint: 600,
              settings: {

                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
           ]
      };
  return (
    <div className="bg-[#eef1ff] section-intro">
      <div className="container mb-8 mx-auto">
        <h1 className="text-[#354895] text-center font-semibold mb-4 text-[22px]">গণমাধ্যমে Shikho</h1>
        <p className="text-[#354895] text-center text-[14px]">দৈনিক সংবাদপত্র, টেলিভিশন চ্যানেলসহ বিভিন্ন গণমাধ্যমে Shikho<br/> সম্পর্কে প্রকাশিত বিভিন্ন সংবাদ ও প্রতিবেদনসমূহ</p>
      </div>
      
    <div className="">
        <Slider {...settings} className="">
            {
                media_coverage.map(item=>{
                    return(
                        <div className="" key={item.id}>
                            <Link href={item.link} target="_blank">
                            <div className=" w-[90%] border-2 bg-white p-2 rounded-2xl mb-6 cursor-pointer" >
                                <Image className="w-[100%] object-cover h-[220px] mb-8" src={item.image} height={300} width={300} alt="News Coverage Image"></Image>
                                <h1 className="text-[#354895] font-semibold mb-8 text-[16px]">{(item.title).substring(0,65)}...</h1>
                                <div className="flex-between">
                                    <div className="w-[50px] h-[50px] p-4">
                                    <Image src={item.logo} className="h-[100%] w-[100%] object-cover " width={80} height={50} alt="logo"></Image>
                                    </div>
                                    <p className="text-[14] fton-semibold text-[#354895]">{item.date}</p>
                                </div>
                            </div>
                            </Link>
                            
                        </div>
                    )
                })
            }
        </Slider>
    </div>
 
    </div>
  )
}

export default HomePageMediaCoverage
