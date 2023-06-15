import React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import myimg from "../accets/—Pngtree—flat design concept of programmers_5870919.png";
import { FaAward } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 1000});
  }, []);

  return (
    <section id="about" className=" mt-[50px] md:mt-[100px]  mb-[50px] md:mb-[100px]">
      <div>
         <div data-aos="fade-up">
         <h1 className="text-white font-serif text-xl text-center">
          Get to know
        </h1>
        <h1 className="text-cyan-500 font-serif text-3xl text-center">
          ABOUT ME
        </h1>

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-96 h-1 my-4 bg-cyan-800 border-0 rounded" />
          <div class="absolute px-4 -translate-x-1/2 bg-black left-1/2 ">
            <FaAward color="cyan" size={25}/>
          </div>
        </div>
          </div> 

        <div className="grid  md:grid-cols-4 :grid-flow-row-dense place-items-center md:mt-[60px]">
          <div data-aos="fade-up"  className=" w-[350px] col-span-2 hidden md:block ml-[180px]">
            {/* div for photos */}
            <img src={myimg} alt="myimg" className="  " />
          </div>

          <div className="col-span-2">
            <div className="   place-items-center ">
              {/* div for information */}

              <div data-aos="fade-up"  className=" mt-[40px] mx-2 sm:mt-[50px]  lg:mt-[40px] lg:mb-[40px] lg:mr-[180px]">
                <p className="bg-gradient-to-r from-cyan-400 to-cyan-200  inline-block text-transparent bg-clip-text md:w-[370px] text-center md:text-start lg:w-[510px] md:text-xl  font-medium ">
                  Hi, I am Mohan Renukadas Agarmore, currently pursuing B.Tech
                  from Shri Guru Gobind Singhji Institute of Engineering &
                  Technology, Nanded. I am a Frontend Web Developer and learning
                  Backend Development. I also solve problems on various coding
                  platforms.
                </p>
              </div>

              <div className="mt-[30px]  flex justify-center md:place-items-center">
                
                <Link data-aos="fade-up" to="contact" spy={true} smooth={true}  duration={500} offset={-70} delay={200} className=" cursor-pointer text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm px-5 py-2.5 text-center mr-2  rounded-lg">
                lets talk
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
