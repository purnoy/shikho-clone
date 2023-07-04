'use client'
import React, { createContext, useContext, useState } from 'react';
import { acamedicOverview } from '@/utilities/utilities';

export const HomePageAcamedicOverviewContext = createContext();


const HomePageAcamedicOverviewProvider = ({children}) => {


    const [academicList, setAcademicList] = useState(acamedicOverview);


    const highlightedCourse = (id)=>{
        const listAcademic = [];
        acamedicOverview.find((item, a)=>{
            if(item.id === id){
                acamedicOverview[a] = {...item, status:true};
                listAcademic.push(acamedicOverview[a]);
            }
            else{
                acamedicOverview[a] = {...item, status: false};
                listAcademic.push(acamedicOverview[a]);
            }
        });
        
        setAcademicList(listAcademic);
    }

  

  return (
    <HomePageAcamedicOverviewContext.Provider value={{academicList, highlightedCourse}}>
        {children}
    </HomePageAcamedicOverviewContext.Provider>

  )
}

export default HomePageAcamedicOverviewProvider;