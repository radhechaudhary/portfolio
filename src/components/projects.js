import React from 'react'
import slider from './slider.png'
import keeper from './keeper-app.png'
import regester from './register-app.png'
import chat from './chatpage.png'
import "aos/dist/aos.css";


function Projects(props) {
  return (
    <section className={`projects skills about ${!props.DarkTheme?"background-light":""}`} id="projects">
        <h2>
        Projects
        <div ></div>
      </h2>
      <div className='projects-list' >
        <div data-aos="fade-down" data-aos-easing="linear"  className='project'    >
            <a href="https://regester-app-frontend.vercel.app/"><img src={regester}/></a>
            <h3>Hotel Management</h3>
        </div>
        <div className='project' data-aos="fade-down" data-aos-easing="linear" data-aos-delay="150"  >
            <a href="https://keeperappproject.vercel.app/"><img src={keeper} /></a>
            <h3>Keeper</h3>
        </div>
        <div className='project' data-aos="fade-down" data-aos-easing="linear" data-aos-delay="300">
            <a href="https://chat-app-frontend-two-gold.vercel.app/"><img src={chat} /></a>
            <h3>Let's Chat</h3>
        </div>
      </div>
    </section>
  )
}

export default Projects
