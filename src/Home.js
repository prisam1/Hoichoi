import React from 'react'
import Banner from './Banner'
import "./app.css"
import Rows from "./Rows"
import data from './data'

export default function Home() {

  return (
    <>
    
    <div> <Banner/></div>
          
          <Rows title={"Trending"} movie={data["Trending"]}/>
          <Rows title={"Horror"} movie={data["Horror"]}/>
          <Rows title={"Thriller"} movie={data["Thriller"]}/>
          <Rows title={"Drama"} movie={data["Drama"]}/>
          <Rows title={"Comedy"} movie={data["Comedy"]}/>
          <Rows title={"MostWatched"} movie={data["MostWatched"]}/>
          <Rows title={"WomenCentric"} movie={data["WomenCentric"]}/>
          <Rows title={"Upcoming"} movie={data["Upcoming"]}/>
          <Rows title={"MostReviewed"} movie={data["MostReviewed"]}/>

    
    
     
    
    </>
    
  )
}