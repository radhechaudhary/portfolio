import {useRef, useEffect} from 'react'
import {motion, useInView, useAnimation} from 'framer-motion'
import css from './assests/css.png'
import js from './assests/js.png'
import html from './assests/html.png'
import mysql from './assests/mysql.png'
import node from './assests/node-js.png'
import react from './assests/react.png'


function Skills(props) {
   const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.9,margin: "0px 0px", once:true});
    const controls = useAnimation();
    const skills=[{name:'javascript', level:0.85, experience: 2, icon:js}, {name:'react', level:0.7, experience: 1, icon:react}, {name:"html", level:1, experience: 3, icon:html}, {name:'css', level:1, experience: 3, icon:css}, {name:'node', level:0.8, experience: 1.5, icon:node}, {name:"SQL", level:0.9, experience: 1.5, icon:mysql}]
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
      else{
        controls.start('hidden')
      }
    }, [inView, controls]);
  return (
    <section className={` skills about ${!props.DarkTheme?"background-light":""}`} id="skills">
      <h2>
        Skills
        <div ></div>
      </h2>
      <motion.div ref={ref} className='skills-list' >
          {skills.map((skill)=>{
            return (
              <div className="skill">
                <div className='skill-name'>
                  <img style={{width:'50px'}} src={skill.icon}/>
                  <h3>{skill.name}</h3>
                </div>
                <div className='level-bar'>
                  <motion.div 
                  variants={{hidden:{width:0, transition:{delay:0.5}}, visible:{width:`${skill.level*100}%`, transition:{ease:'easeOut', duration:0.8}}}}
                  initial='hidden'
                  animate={controls}
                  className='level'>
                    {`${skill.level*100}%`}
                  </motion.div>
                </div>
              </div>)
          })}
            
        
      </motion.div>
    </section>
  )
}

export default Skills
