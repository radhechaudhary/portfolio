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
import img from './radhe (2).png'

function App() {

  const [DarkTheme,  setTheme]=useState(true)
  function toggleTheme(){
    console.log(document.querySelector('body').style.backgroundColor)
    setTheme(!DarkTheme);
  }
  React.useEffect(()=>{
    const preloadImages = (imageUrls) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    // Example usage:
    preloadImages([
      img,
      './sun2.svg',
      './moon.svg'
    ]);
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
