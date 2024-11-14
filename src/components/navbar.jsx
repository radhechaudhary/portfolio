import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import img from './IMG-20240325-WA0006.jpg'


function Navbar() {
  
  const [toggled,  setToggled]=useState(false)
  function togglenavbar(){
    setToggled(!toggled);
  }

  const [currSection, setCurrSection]=useState('home')
  return (
    <header className='navbar'>
        <Avatar
            sx={{ width:40, height:40}}
            alt="Remy Sharp"
            src={img}>
        </Avatar>
        <div className='items'>
            <div className={`nav-list ${toggled?"show":""}`}>
                <a onClick={()=>{togglenavbar(); setCurrSection('home');}} href="#home">Home <div className={` ${currSection==='home'?"div-show":""}`} ></div></a>
                <a onClick={()=>{togglenavbar(); setCurrSection('about');}} href="#about">About <div  className={` ${currSection==='about'?"div-show":""}`} ></div></a>
                <a onClick={()=>{togglenavbar(); setCurrSection('skills');}} href="#skills">Skills <div  className={` ${currSection==='skills'?"div-show":""}`} ></div></a>
                <a onClick={()=>{togglenavbar(); setCurrSection('projects');}} href="#projects">Projects <div  className={` ${currSection==='projects'?"div-show":""}`} ></div></a>
                <a onClick={()=>{togglenavbar(); setCurrSection('contact');}} href="#contact">Contact <div  className={` ${currSection==='contact'?"div-show":""}`} ></div></a>
            </div>
            <div className='menu' onClick={togglenavbar}><MenuOpenIcon/></div>
        </div>
    </header>
  )
}

export default Navbar
