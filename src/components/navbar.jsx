import React, { useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import img from './IMG-20240325-WA0006.jpg'
import clouds from './fresh-snow.png'
import moon from './moon.jpg'


function Navbar(props) {
  
  const [toggled,  setToggled]=useState(false)
  function togglenavbar(){
    setToggled(!toggled);
  }
  const buttonRef=useRef();
  const sliderRef=useRef();

  const [currSection, setCurrSection]=useState('home')

  function clicked(e){
    console.log('clicked')
  }
  return (
    <header className={`navbar ${!props.DarkTheme?"background-light border-bottom":""}`}>
        <Avatar
            sx={{ width:40, height:40}}
            alt="Remy Sharp"
            src={img}>
        </Avatar>
        <div className='items'>
            <div className={`nav-list ${toggled?"show":""} ${!props.DarkTheme?"background-light ":""}`}>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('home');}} href="#home">Home <div className={` ${currSection==='home'?"div-show":""}`} ></div></a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('about');}} href="#about">About <div  className={` ${currSection==='about'?"div-show":""}`} ></div></a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('skills');}} href="#skills">Skills <div  className={` ${currSection==='skills'?"div-show":""}`} ></div></a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('projects');}} href="#projects">Projects <div  className={` ${currSection==='projects'?"div-show":""}`} ></div></a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('contact');}} href="#contact">Contact <div  className={` ${currSection==='contact'?"div-show":""}`} ></div></a>
            </div>
            <div className={`menu ${!props.DarkTheme?"color-black":""}`} onClick={togglenavbar}><MenuOpenIcon/></div>
            <div ref={buttonRef} onClick={props.toggleTheme} className={`theme-toggle ${!props.DarkTheme?"button-light":""}`}>
              <div ref={sliderRef}  className={`slider ${!props.DarkTheme?"slider-light":''}`}></div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
