import './index.css';
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from './components/Resume'
import Project from './components/Project';
import Codingplatform from "./components/Codingplatform";
import 'aos/dist/aos.css';




export default function App() {


  return (
    <div className='bg-primary' >

      <div className="">
        <Header />
      </div>


       <div className="z-50  rounded-full p-2   bg-cyan-800 bg-opacity-50 left-6 sm:left-8  fixed md:left-12 bottom-4 md:top-1/4 md:h-1/2" >  

       <Nav  />
      </div>

      <div data-aos="fade-up"
     data-aos-duration="3000" className="">
        <About />
      </div>

      <div data-aos="fade-up"
     data-aos-duration="3000" className="mb-[-50px]">
        {/* <Services/> */}
        <Resume/>
      </div>
      
      <div  data-aos="fade-up"
     data-aos-duration="3000">
        <Experience />
      </div>


      <div  data-aos="fade-up"
     data-aos-duration="3000" >
    <Project/>
     </div>
     
      <div  data-aos="fade-up"
     data-aos-duration="3000"  >
        <Codingplatform />
      </div>

      <div data-aos="fade-up"
     data-aos-duration="3000" className='mt-10' >
        <Contact />
      </div>

      <div className='mt-[50px]'>
        <Footer />
      </div>

      {/* <Expericence/> */}
    </div>
  );
}
