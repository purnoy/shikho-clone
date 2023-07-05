'use client'
import { createContext, useState } from "react";
import { lessonCarousel } from "@/utilities/utilities";

export const HomePageLessonCarouselContext = createContext();




const HomePageLessonCarouselProvider = ({children}) => {

    const {carouselData, setCarouselData} = useState(lessonCarousel);
    const catNav = [...new Set(lessonCarousel.map(item=>{
        return item.category;
      }))];
    
      const catNavObj = catNav.map(cat=>{
        return {
          category:cat, status:false
        }
      })
      catNavObj.unshift({category:'সকল কোর্স', status:true});

      const [newCatNavObj, setNewCatNavObj] = useState(catNavObj);
      const selectedCat = (item) =>{
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
        }

        const filteredData = ()=>{
            const trueData = newCatNavObj.find(td=> td.status===true)
            let newDataList = []
            lessonCarousel.map(item=>{
                if(trueData.category ===item.category){
                    newDataList = lessonCarousel.filter(prop=> item.category!==prop.category);
                }
                else if(trueData.category === 'সকল কোর্স'){
                    console.log(lessonCarousel)
                }

            })
            console.log(newDataList);
        }
        filteredData();
  return (
    <HomePageLessonCarouselContext.Provider value={{newCatNavObj, selectedCat}}>
      {children}
    </HomePageLessonCarouselContext.Provider>
  )
}

export default HomePageLessonCarouselProvider
