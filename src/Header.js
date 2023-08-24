import { Link } from "react-router-dom";
import {FaGlobe} from "react-icons/fa";
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io";
import { useState,useEffect } from "react";
import {FaSistrix} from 'react-icons/fa'
import "./app.css"
import React from 'react'

export default function Header() {
  const [buttons,setbutton]=useState(0)
  const [languag,setLanguage]=useState('ENG')
  const [HOME,setHome]=useState('HOME')
  const [FREE,setFREE]=useState('FREE')
  const [MOVIES,setMOVIES]=useState('MOVIES')
  const [SHOWS,setShows]=useState('SHOWS')
  const [UPCOMING,setUpcoming]=useState('UPCOMING')
  const [GIFT,setGift]=useState('GIFT')
  const [OFFERS,setOffers]=useState('OFFER')
  const [LOGIN,setLogin]=useState('LOGIN')
  const [SIGNUP,setSignUp]=useState('SIGNUP')
  const [SUBSCRIBE,setSubscribe]=useState('SUBSCRIBE')
  const language={
  
    cursor:"pointer",
    width:"40px",
    height:"40px",
    color:"red",
   
    
  }
 
useEffect(() => {
  setHome(languag === 'BNG' ? 'হোম' : 'HOME');
  setFREE(languag === 'BNG' ? 'ফ্রি' : 'FREE');
  setMOVIES(languag === 'BNG' ? 'মুভিস' : 'MOVIES');
  setUpcoming(languag === 'BNG' ? 'আপকামিং' : 'UPCOMING');
  setGift(languag === 'BNG' ? 'গিফট' : 'GIFT');
  setOffers(languag === 'BNG' ? 'অফারস' : 'OFFERS');
  setLogin(languag === 'BNG' ? 'লগইন' : 'LOGIN');
  setSignUp(languag === 'BNG' ? 'সাইনআপ' : 'SIGNUP');
  setShows(languag === 'BNG' ? 'সিরিজ' : 'SHOWS');
  setSubscribe(languag === 'BNG' ? 'সাবস্ক্রাইব' : 'SUBSCRIBE');
}, [languag]);
 
  return (
    <nav className="header">
    <h1>
        ho!cho!
    </h1>
    
    <main className="main">
        <Link className="head" to={"/"}>{HOME} </Link>
        <Link className="head" to={"/free"}>{FREE}</Link>
        <Link className="head" to={"/MOVIES"}>{MOVIES}</Link>
        <Link className="head" to={"/Shows"}>{SHOWS}</Link>
        <Link className="head" to={"/upcoming"}>{UPCOMING}</Link>
        <Link className="head" to={"/gift"}>{GIFT}</Link>
        <Link className="head" to={"/offers"}>{OFFERS}</Link>
        <Link className="head" to={"/search"}><div className="search"><FaSistrix/></div></Link>
        
        <>
        <div>  
        
          <button className="button" onClick={()=>{buttons===0?setbutton(1):setbutton(0)}}>
        <FaGlobe size="1.5rem"/>
        {
          buttons===0?<IoMdArrowDropdown size="1.5rem"/>:<IoMdArrowDropup size="1.5rem"/>
          
        }
               </button>
                  {buttons===1 &&<div style={language}>
                  <h4 onClick={()=>{setLanguage("ENG")}}>English</h4>
                    <h4 onClick={()=>{setLanguage("BNG")}}>Bengali</h4>
        </div>}
       
        
        </div>
        <Link className="head" to={"/login"}> {LOGIN} </Link>
        <Link className="head" to={'/signUp'}>{SIGNUP}</Link>
        <div className="btn">{SUBSCRIBE}</div>
        </>
    </main>
</nav>
  )
}