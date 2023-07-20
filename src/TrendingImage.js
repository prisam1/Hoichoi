import React from 'react'
import {useState} from 'react'

export default function TrendingImage({movie}) {
    const [currIndex,setIndex]=useState(0)
   const bannerimg={
   
    width:"99%",
    height:"100%",
    backgroundImage:`url(${movie[currIndex].link})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
 
    
   
    
   }
   const trendBanner={
    margin:"5rem",
    height:"10rem",
    width:"87%",
    "object-fit":"cover"
 
   }
   const leftArrow={
    position: "absolute",
    top: "30%",
    left: "32px",
    fontSize: "2rem",
    color:" #000",
    zIndex: "1",
    cursor: "pointer",

    transform: "scale(1.8)"
   }
   const righttArrow={
    position: "absolute",
    top: "30%",
    right: "32px",
    fontSize: "2rem",
    color:" #000",
    zIndex: "1",
    cursor: "pointer",
    
    
    transform: "scale(1.8)"
   }
   const dot={
    color: "white"
   }
  return (
  <>
   
  </>
    


      )
}
