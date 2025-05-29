import React, { useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import img from './radhe (2).png'
import {motion} from 'framer-motion'

function Navbar(props) {
  
  const [toggled,  setToggled]=useState(false)
  function togglenavbar(){
    setToggled(!toggled);
  }
  const buttonRef=useRef();
  const sliderRef=useRef();

  const [currSection, setCurrSection]=useState('home')

  return (
    <header className={`navbar ${!props.DarkTheme?"background-light border-bottom":""}`}>
        <Avatar
            sx={{ width:40, height:40}}
            alt="Remy Sharp"
            src={img}>
        </Avatar>
        <div className='items'>
            <div className={`nav-list ${toggled?"show":""} ${!props.DarkTheme?"background-light ":""}`}>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('home');}} href="#home">Home {currSection==='home'?<motion.div className='nav-underline' layoutId='underline' ></motion.div>:<div></div>}</a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('about');}} href="#about">About {currSection==='about'?<motion.div className='nav-underline' layoutId='underline'  ></motion.div>:<div></div>}</a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('skills');}} href="#skills">Skills {currSection==='skills'?<motion.div className='nav-underline' layoutId='underline' ></motion.div>:<div></div>}</a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('projects');}} href="#projects">Projects {currSection==='projects'?<motion.div className='nav-underline' layoutId='underline'  ></motion.div>:<div></div>}</a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} onClick={()=>{togglenavbar(); setCurrSection('contact');}} href="#contact">Contact {currSection==='contact'?<motion.div className='nav-underline' layoutId='underline' ></motion.div>:<div></div>}</a>
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
