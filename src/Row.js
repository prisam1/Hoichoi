import React from 'react'
import { RxChevronRight,RxChevronLeft } from "react-icons/rx";
import Slider from 'react-slick'


export default function Rows({title,movie}) {
 

 
function ele(val){

    return(
        <>
                
        
      
        
       
       <img src={val.link} className="image"/>
       
      
       <h4>{val.name}</h4>
           
            
        
 
        
       
        </>
        

    )
    
}



  return (
    <>
    
    <div><h1>{title}</h1></div>
    <hr className='line2'></hr>
    
   <div className='poster'>
       
   <div className='pre-btn' ><RxChevronLeft/></div>
   {
   
   <div className='caraousal'>
  
  
  
  { movie.map((ele))}

  
   </div>
  
   }
    
    <div className='next-btn' ><RxChevronRight/></div>
   </div>
   
   
    </>
  )
}
