import { useRef } from "react";
import About from "./components/About/About";
import Dummy from "./components/Dummy/Dummy";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";


function App() {


  const myref = useRef(null);

  const handlescroll = () => {
      myref.current.scrollIntoView({behavior: 'smooth',block: 'start'});
      // console.log("hi");
  }
  

  return (
   
    <>
    <Navbar handlescroll={handlescroll}/>
    
    {/* <Dummy/> */}
    <About/>
    <Skills myref={myref}/>
    <Education/>
    <Projects/>
    <Footer/>
    </>
  );
}

export default App;
