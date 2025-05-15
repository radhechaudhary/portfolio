import React, {useEffect, useRef} from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img from './radhe (2).png'
import { Button } from '@mui/material';
import {motion, useAnimation, useInView} from 'framer-motion';
import Typewriter from './typwriter';

function Home(props) {
    const ref= useRef(null);
    const variants1={
        hidden:{
            x:-1000,
        },
        visible:{
            x:0,
            transition:{
                delay:0.1
            }
        }
    }
    const variants2={
        hidden:{
            x:1000,
        },
        visible:{
            x:0,
            transition:{
                delay:0.1
            }
        }
    }

    return (
    <section id="home">
        <div ref={ref} className={`home ${!props.DarkTheme?"background-light color-black":""}`}>
            <motion.div variants={variants1} initial='hidden' animate='visible' className='content'>
                <div className='heading'>
                    <h1 >Hi! <br/>I'm <span>Mohit</span><Typewriter/></h1>
                    <Button href='#contact' sx={{backgroundColor:"rgba(207,27,27)"}}  variant="contained">Contact</Button>
                </div>
                <div  className='social'>
                    <a className={` ${!props.DarkTheme?"color-black":""}`} href="https://www.instagram.com/radhe_chaudhary_2k4/" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize='large'/></a>
                    <a className={` ${!props.DarkTheme?"color-black":""}`} href="https://github.com/radhechaudhary" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize='large'/></a>
                    <a className={` ${!props.DarkTheme?"color-black":""}`} href="https://www.linkedin.com/in/mohit-chaudhary-5a0002272/" target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize='large'/></a>
                </div>
            </motion.div>
            <motion.div  variants={variants2} initial='hidden' animate='visible' className='main-image'>
                <img src={img} width="500px" />
            </motion.div>       
        </div>
    </section>
  )
}

export default Home
