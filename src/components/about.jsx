import React from 'react'
import img from './about-radhe.jpeg'

function About(props) {
  return (
    <section id="about" className={`about ${!props.DarkTheme?"background-light":""}`}>
      <h2>
        About
        <div ></div>
      </h2>
      <div className='content'>
        <div data-aos="fade-down" data-aos-easing="linear" className="photo">
            <img src={img}/>
        </div>
        
        <div className='text'>
            <h3 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Hello!!</h3>
            <p data-aos="fade-down" data-aos-easing="linear">Iam an hardworking developer and a full Stack web developer based in Mathura, UttarPradesh with a good knowledge of react, js, 
                node, express, postgres , python and OOps concepts!! I have had my studies from Sacred Heart school and scored 92 % in 12th exams. Currently Persuing BSc in 
                Computer Science and learning DSA with Java.<br/>
            I love to code and is seeking future in developing!!</p>
        </div>
      </div>
    </section>
  )
}

export default About;
