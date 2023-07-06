import React, { useEffect } from "react";
import cv from "../accets/cv.pdf";
import myimg from "../accets/myimg.png";
import background from "../accets/background.jpg";
import Conect from "./Conect";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { animateScroll } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import "aos/dist/aos.css";
import Aos from "aos";

const Header = () => {
  // used as componentdid mount
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const scrollToBottom= () => {
    animateScroll.scrollToBottom({
      duration:600,
    });
  };
 

  return (
    <section id="home" className="grid   justify-center   relative ">
      {/* <video autoPlay muted loop className=" brightness-50 top-0 ">
        <source src={bgvideo} type="video/mp4" />
      </video> */}
      <img src={background} alt=""  className="brightness-75" />
     
     <div className="sm:visible md:hidden">
        <img src={background} alt="" className="brightness-75" />
     </div>


     <div className="sm:visible md:hidden">
        <img src={background} alt="" className="brightness-75" />
     </div>

      <div

      
        id="header"
        className="absolute inset-0 flex-col items-center justify-center mt-8"
      >
       
       
            
        
      

        <h1
         className="text-white font-serif  text-xl lg:text-5xl   mt-[5xl] lg:mt-[15px] text-center"
        >
          Mohan Renukadas Agarmore
        </h1>

        <div className="text-center flex justify-center items-center mt-2 ">
          <p className="text-base md:text-2xl font-serif text-white">I'm </p>
           <h1 className="text-cyan-400 text-sm md:text-xl font-serif underline underline-offset-4 decoration-cyan-800">
            <Typewriter
            options={{
              strings: ['An aspiring Software developer', 'Tech Enthuziastic', 'Full stack web developer', 'Compitative programmer'],
              autoStart: true,
              loop: true,
              wrapperClassName: "text-cyan p-1 border-blue-400"
            }}
          />
           </h1>
        </div>

        <div className="flex  justify-center mt-5 ">
          <button
            
            className="bg-transparent hover:bg-cyan-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded justify-center"
          >
            <a href={cv} download>
              download
            </a>
            
          </button>

          <button
          
            type="button"
            onClick={scrollToBottom}
            className=" rounded-lg text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm px-5 py-2.5 text-center mr-2 ml-5 "
          >
            Contact us
          </button>
        </div>

        <div className="flex mt-[50px]    sm:ml-[80px]  md:[180px] lg:ml-[500px]">
          <div  className=" ml-2 mt-[60p] lg:ml-[25px]"  onClick={scrollToBottom}>
            <a href="#footer">
              <BsFillArrowDownCircleFill className=" animate-pulse fill-cyan-500 w-[35px] h-[35px] mt-[180px] hover:fill-cyan-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 " />
            </a>
          </div>

          <div
            
            className="  h-auto  lg:max-w-xs   ml-[50px] bg-gradient-to-r from-cyan-500 to-cyan-900 rounded-t-full border-gradient-animation"
          >
            <img src={myimg} alt="selfpicture" />
          </div>

          <div className="mr-2 ml-[50px] mt-28">
            <Conect />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
