import {useEffect, useRef} from 'react'
import EBS from './assests/EBS.png'
import Hotelier from './Hotelier.png'
import chat from './chatpage.png'
import Ai from './Ai.png'
import {motion, useAnimation, useInView} from 'framer-motion'

function Projects(props) {
  const projects=[
    {name:'Hotelier', photo:Hotelier, link:" https://github.com/radhechaudhary/Hotelier.git", description:"An ultimate System for managing hotels"},
    {name:'Ai Assistant', photo:Ai, link:"https://ai-assistant-nine-bice.vercel.app/", description:"This a vocal Ai assistant using google gemini"},
    {name:'Chat', photo:chat, link:"https://chat-app-frontend-two-gold.vercel.app/login", description:"Full fledge two tier messaging web application"},
    {name:'Electricity Billing System', photo:EBS, link:"", description:"semi automated billing system for electricity consumers"}
  ]
  const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5,margin: "0px 0px", once:true});
    const controls = useAnimation();
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
      else{
        controls.start('hidden')
      }
    }, [inView, controls]);
  
    const variants = {
      hidden: {
        y:50,
        opacity: 0,
      },
      visible: {
        y:0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    };

  return (
    <section className={`projects skills about ${!props.DarkTheme?"background-light":""}`} id="projects">
        <h2>
        Projects
        <div ></div>
      </h2>
      <motion.div ref={ref} variants={variants} initial='hidden' animate={controls} className='projects-list' >
       {projects.map((project)=>{
        return (<div className="project">
          <div className="project-image">
            <img src={project.photo}/>
            <motion.div className='description'>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">visit</a>
            </motion.div>
          </div>
          <h3>{project.name}</h3>
        </div>)
       })}
      </motion.div>
    </section>
  )
}

export default Projects
