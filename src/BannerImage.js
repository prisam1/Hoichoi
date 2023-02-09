import React from 'react'
import {useState} from 'react'
import { RxChevronRight,RxChevronLeft } from "react-icons/rx";


export default function BannerImage({arr}) {
    const [currIndex,setIndex]=useState(0)
   const bannerimg={
   
    width:"99%",
    height:"100%",
    backgroundImage:`url(${arr[currIndex].link})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
 
    
   
    
   }
   const outerBanner={
    margin:"7rem",
 height:"20rem",
 width:"87%",
 "object-fit":"cover"
 
   }
   const leftArrow={
    position: "absolute",
    top: "30%",
    left: "32px",
    fontSize: "3rem",
    color:" #000",
    zIndex: "10",
    cursor: "pointer",

    transform: "scale(1.8)"
   }
   const righttArrow={
    position: "absolute",
    top: "30%",
    right: "32px",
    fontSize: "3rem",
    color:" #000",
    zIndex: "10",
    cursor: "pointer",
    
    
    transform: "scale(1.8)"
   }
 
  return (
  <>
    <div style={outerBanner}>
        <div style={leftArrow} onClick={()=>{const isfirst=currIndex==0;isfirst?setIndex(arr.length-1):setIndex(currIndex-1)}}>{<RxChevronLeft/>}</div>
        <div style={righttArrow} onClick={()=>{const lastIndex=currIndex==arr.length-1;lastIndex?setIndex(0):setIndex(currIndex+1)}}>{<RxChevronRight/>}</div>
    <div style={bannerimg}></div>
   
    </div>
  </>
    
  )
}
