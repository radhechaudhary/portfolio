import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img from './radhe (2).png'
import { Button } from '@mui/material';

function Home(props) {
  return (
    <section id="home">
        <div className={`home ${!props.DarkTheme?"background-light":""}`}>
            <div className='content'>
            <div data-aos="fade-right" className='heading'>
                <h1 className={` ${!props.DarkTheme?"color-black":""}`} >Hi! <br/>I'm <span>Mohit</span><br/>Web Developer</h1>
                <Button href='#contact' sx={{backgroundColor:"rgba(207,27,27)"}}  variant="contained">Contact</Button>
            </div>
            
            <div data-aos="fade-right" className='social'>
                <a className={` ${!props.DarkTheme?"color-black":""}`} href="https://www.instagram.com/radhe_chaudhary_2k4/"><InstagramIcon fontSize='large'/></a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} href="https://github.com/radhechaudhary"><GitHubIcon fontSize='large'/></a>
                <a className={` ${!props.DarkTheme?"color-black":""}`} href="https://www.linkedin.com/in/mohit-chaudhary-5a0002272/"><LinkedInIcon fontSize='large'/></a>
            </div>
            </div>
            
            <div  className='main-image'>
                <img data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000" src={img} width="500px" />
            </div>       
        </div>
    </section>
  )
}

export default Home
