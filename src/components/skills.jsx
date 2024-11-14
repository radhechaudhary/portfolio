import React from 'react'
import JavascriptIcon from '@mui/icons-material/Javascript';

function Skills() {
  return (
    <section className='skills about' id="skills">
      <h2>
        Skills
        <div ></div>
      </h2>

      <div className='skills-list' data-aos="fade-down" data-aos-easing="linear" >
        <div className="skill">
            <div className='skill-Data'>
               <h3>javascript
               <div ></div>
               </h3>
            </div>
        </div>

        <div className="skill">
            <div className='skill-Data' data-aos="fade-down" data-aos-easing="linear" >
               <h3>React
               <div ></div>
               </h3>
            </div>
        </div>

        <div className="skill">
            <div className='skill-Data' data-aos="fade-down" data-aos-easing="linear" >
               <h3>Node
               <div ></div>
               </h3>
            </div>
        </div>

        <div className="skill">
            <div className='skill-Data' data-aos="fade-down" data-aos-easing="linear">
               <h3>Postrgres
               <div ></div>
               </h3>
            </div>
        </div>

        <div className="skill">
            <div className='skill-Data' data-aos="fade-down" data-aos-easing="linear">
               <h3>express
               <div ></div>
               </h3>
            </div>
        </div>

        <div className="skill">
            <div className='skill-Data' data-aos="fade-down" data-aos-easing="linear" >
               <h3>Mongo
               <div ></div>
               </h3>
            </div>
        </div>
        

      </div>
    </section>
  )
}

export default Skills
