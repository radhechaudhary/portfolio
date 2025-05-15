import React, { useRef, useEffect } from 'react';
import img from './about-radhe.jpeg';
import { motion, useAnimation, useInView } from 'framer-motion';

function About(props) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.9,margin: "00px 0px", once:true});
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
      scale:0,
      opacity: 0,
    },
    visible: {
      scale:1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section
      id="about"
      className={`about ${!props.DarkTheme ? 'background-light' : ''}`}
    >
      <h2>
        About<div></div>
      </h2>

      {/* ✅ Apply ref here */}
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="content"
      >
        <div className="photo">
          <motion.img src={img} initial={{x:1000}} 
        animate={{ x:0, filter: ["drop-shadow(0px 0px 40px #ae92b5)","drop-shadow(0px 0px 20px #ae92b5)", "drop-shadow(0px 0px 40px #ae92b5)"]}}
        transition={{
          x:{delay:0.5, type: "spring"},
          filter:{ repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "linear"},
        }}  alt="Radhe" />
        </div>
        <div className="text">
          <h3>Hello!!</h3>
          <p>
            I am a hardworking developer and a full-stack web developer based in
            Mathura, Uttar Pradesh with good knowledge of React, JS, Node,
            Express, Postgres, Python, and OOP concepts! I studied at Sacred
            Heart School and scored 92% in 12th exams. Currently pursuing BSc in
            Computer Science and learning DSA with Java.
            <br />
            I love to code and am seeking a future in development!!
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
