
import React, { useContext } from 'react'
import HeroSection from './../components/HeroSection';
import ImageModal from '@/components/ImageModal';
import HomePageCourseIntro from '@/components/HomePageCourseIntro';
import HomePageAcamedicOverview from '@/components/HomePageAcamedicOverview ';
import HomePageLessonCarousel from '@/components/HomePageLessonCarousel';
import VideoModal from '@/components/VideoModal';
import HomePageMobileUpdate from '@/components/HomePageMobileUpdate';



const HomePage = () => {

  return (
    <div className="relative">
      <HeroSection/>
      <ImageModal/>
      <HomePageCourseIntro/>
      <HomePageAcamedicOverview/>
      <HomePageLessonCarousel/>
      <VideoModal/>
      <HomePageMobileUpdate/>
      
      
    </div>
  
  )
}

export default HomePage
