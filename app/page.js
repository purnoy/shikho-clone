
import React from 'react'
import HeroSection from './../components/HeroSection';
import ImageModal from '@/components/ImageModal';
import HomePageCourseIntro from '@/components/HomePageCourseIntro';
import HomePageAcamedicOverview from '@/components/HomePageAcamedicOverview ';
import HomePageLessonCarousel from '@/components/HomePageLessonCarousel';

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection/>
      <ImageModal/>
      <HomePageCourseIntro/>
      <HomePageAcamedicOverview/>
      <HomePageLessonCarousel/>
      
    </div>
  
  )
}

export default HomePage
