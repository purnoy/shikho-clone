
import Link from "next/link";
import Slider from "react-slick";
import ImageModal from "./ImageModal";

const HomePageLessonCarouselPrinting = ({item}) => {
    
  
  return (
        
            <div className="h-[200px] max-w-[90%] space-x-4 bg-white rounded-xl shadow-lg">
                
            
            {
                item.for
            }
        
            </div>

        
  )
}

export default HomePageLessonCarouselPrinting
