import React from 'react';
import styles from '../app/globals.css'
import {VscChevronLeft} from 'react-icons/vsc';
import {VscChevronRight} from 'react-icons/vsc'

export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
    <div
      // className={`hidden md:block h-[50px] w-[50px] bg-white rounded-full cursor-pointer hover:bg-blue-500 shadow-lg absolute -translate-y-1/2 top-[50%] left-8 before:absolute before:w-[30px] before:h-[30px] before:bg-green-500 before:rounded-full before:top-[50%] before:left-[50%] before:-translate-y-1/2 before:-translate-x-1/2 before:flex-center before:content-['<']`}
      className={`hidden md:block h-[50px] group w-[50px] bg-white rounded-full cursor-pointer hover:bg-blue-500 shadow-lg absolute -translate-y-1/2 top-[50%] right-8`}
      onClick={onClick}
    >

    <div className="flex-center group items-center h-[100%] text-[30px] text-[#666] group hover:text-white  ">
      <VscChevronRight />
    </div>

    </div>
  );
}

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      // className={`hidden md:block h-[50px] w-[50px] bg-white rounded-full cursor-pointer hover:bg-blue-500 shadow-lg absolute -translate-y-1/2 top-[50%] left-8 before:absolute before:w-[30px] before:h-[30px] before:bg-green-500 before:rounded-full before:top-[50%] before:left-[50%] before:-translate-y-1/2 before:-translate-x-1/2 before:flex-center before:content-['<']`}
      className={`hidden md:block h-[50px] group w-[50px] bg-white rounded-full cursor-pointer hover:bg-blue-500 shadow-lg absolute -translate-y-1/2 top-[50%] left-8`}
      onClick={onClick}
    >

    <div className="flex-center group items-center h-[100%] text-[30px] text-[#666] group hover:text-white  ">
      <VscChevronLeft />
    </div>

    </div>
  );
}

