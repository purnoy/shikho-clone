'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { investors, partners } from '@/utilities/utilities';

const HomePageInvestrosnPartners = () => {

    const settings = {

        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
  
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                },
                breakpoint: 600,
                settings: {
  
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
        ]
    }
  return (
    <div className="bg-[#eef1ff] py-16 px-8 w-[100vw]">
        <div className=" mx-auto relative  py-8 px-4">
            <div className=" w-[100%] mx-auto ">
                <h1 className="text-[#354895] text-center font-semibold mb-16 text-[22px]">আমাদের ইনভেস্টরস</h1>
                <Slider {...settings}>
                    {
                        investors.map(item=>{
                            return(
                                <div className="" key={item.id}>
                                <div className=" w-[80%] h-[150px] border-2 bg-white p-2 rounded-2xl mb-6 cursor-pointer" >
                                    <Image className="w-[100%] object-cover h-[100%] mb-8" src={item.image} height={300} width={300} alt="News Coverage Image"></Image>
                                </div>
                            </div>
                            )
                        })
                    }
            </Slider>
            </div>
        </div>
    <div className="mx-auto relative  py-8 px-4">
      <div className=" w-[100%] mx-auto ">
        <h1 className="text-[#354895] text-center font-semibold mb-16 text-[22px]">আমাদের পার্টনারস</h1>
            <Slider {...settings}>
                    {
                        partners.map(item=>{
                            return(
                                <div className="" key={item.id}>
                                <div className=" w-[80%] h-[150px] border-2 bg-white p-2 rounded-2xl mb-6 cursor-pointer" >
                                    <Image className="w-[100%] object-cover h-[100%] mb-8" src={item.image} height={300} width={300} alt="News Coverage Image"></Image>
                                </div>
                            
                                
                            </div>
                            )
                        })
                    }
            </Slider>
        </div>
        </div>
    </div>
  )
}

export default HomePageInvestrosnPartners
