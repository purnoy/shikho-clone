
import React from 'react'
import HeroSection from './../components/HeroSection';
import ImageModal from '@/components/ImageModal';
import HomePageCourseIntro from '@/components/HomePageCourseIntro';

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection/>
      <ImageModal/>
      <HomePageCourseIntro/>
    </div>
  
  )
}

export default HomePage
