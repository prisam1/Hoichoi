import React, { useState } from 'react'
import data from './data.js'

export const Search = () => {
const [userInput,setUser]=useState("")

var result=data["Trending"].filter(item=>{item.name.includes(userInput)})




  return (
    <div className='sposter'>
        <form>
            <input type= "search" className='searchbar' placeholder='Search here...' value={userInput} onChange={(e)=>{
     setUser(e.target.value)
            }}></input>
            
        </form>

        

        <img src={result[0].link}/>
    </div>
  )
}

