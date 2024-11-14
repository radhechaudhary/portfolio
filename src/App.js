import React from "react";
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

function App() {
  React.useEffect(()=>{
    Aos.init({duration:500, once: false});
},[])
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
