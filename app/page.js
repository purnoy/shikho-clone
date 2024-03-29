
import React, { useContext } from 'react'
import HeroSection from './../components/HeroSection';
import ImageModal from '@/components/ImageModal';
import HomePageCourseIntro from '@/components/HomePageCourseIntro';
import HomePageAcamedicOverview from '@/components/HomePageAcamedicOverview ';
import HomePageLessonCarousel from '@/components/HomePageLessonCarousel';
import VideoModal from '@/components/VideoModal';
import HomePageMobileUpdate from '@/components/HomePageMobileUpdate';
import HomePagePromotion from '@/components/HomePagePromotion';
import HomePageTestimonials from '@/components/HomePageTestimonials';
import HomePageAppointment from '@/components/HomePageAppointment';
import HomePageMediaCoverage from '@/components/HomePageMediaCoverage';
import HomePageInvestrosnPartners from './../components/HomePageInvestrosnPartners';


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
      <HomePagePromotion/>
      <HomePageTestimonials/>
      <HomePageAppointment/>
      <HomePageMediaCoverage/>
      <HomePageInvestrosnPartners/>
    </div>
  
  )
}

export default HomePage
