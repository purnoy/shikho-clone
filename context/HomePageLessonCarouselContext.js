'use client'
import { createContext, useEffect, useState } from "react";
import { lessonCarousel } from "@/utilities/utilities";

export const HomePageLessonCarouselContext = createContext();

const catNav = [...new Set(lessonCarousel.map(item=>{
  return item.category;
}))];

const catNavObj = catNav.map(cat=>{
  return {
    category:cat, status:false
  }
})
catNavObj.unshift({category:'সকল কোর্স', status:true});


const HomePageLessonCarouselProvider = ({children}) => {

      const [carouselData, setCarouselData] = useState(lessonCarousel);
      const [newCatNavObj, setNewCatNavObj] = useState(catNavObj);

      const selectedCat = (item) =>{
        setCarouselData(lessonCarousel)
        const catn = [];
        catNavObj.find(prop=>{
            if(item.category === prop.category){
                catn.push({...prop, status: true});
            }
            else{
                catn.push({...prop, status: false});
            } 
        })
        setNewCatNavObj(catn);
       
      
            const trueData = catn.find(td=> td.status===true);
            let newDataList = []
            
            lessonCarousel.map(item=>{
                if(trueData.category ===item.category){
                    newDataList = lessonCarousel.filter(prop=> item.category!==prop.category);
                }
                else if(trueData.category === 'সকল কোর্স'){
                    newDataList = lessonCarousel.map(prop=>prop)
                }
                
            })
            setCarouselData(newDataList)

      
        }

          


  return (
    <HomePageLessonCarouselContext.Provider value={{newCatNavObj, selectedCat, carouselData}}>
      {children}
    </HomePageLessonCarouselContext.Provider>
  )
}

export default HomePageLessonCarouselProvider
