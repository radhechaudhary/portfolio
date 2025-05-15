import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from './components/home';
import Aos from "aos";
import 'aos/dist/aos.css';
import Opening from "./components/opening";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { AnimatePresence, motion } from "framer-motion";

function App() {

  const [DarkTheme,  setTheme]=useState(true)
  function toggleTheme(){
    console.log(document.querySelector('body').style.backgroundColor)
    setTheme(!DarkTheme);
  }
  React.useEffect(()=>{
    Aos.init({duration:500, once: false});
},[])
const [opening, setOpening]= useState(true)
useEffect(()=>{
  const timeOut=setTimeout(()=>{
    setOpening(false);
  }, [3000])
  return ()=>{
    clearTimeout(timeOut)
  }
},[])
  return (
    <AnimatePresence mode="wait">
      {opening ? (
        <motion.div key="opening">
          <Opening />
        </motion.div>
      ) : (
        <motion.div key="main">
          <Navbar DarkTheme={DarkTheme} toggleTheme={toggleTheme} />
          <Home DarkTheme={DarkTheme} toggleTheme={toggleTheme} />
          <About DarkTheme={DarkTheme} toggleTheme={toggleTheme} />
          <Skills DarkTheme={DarkTheme} toggleTheme={toggleTheme} />
          <Projects DarkTheme={DarkTheme} toggleTheme={toggleTheme} />
          <Contact DarkTheme={DarkTheme} toggleTheme={toggleTheme} />
          <Footer DarkTheme={DarkTheme} toggleTheme={toggleTheme} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App;
