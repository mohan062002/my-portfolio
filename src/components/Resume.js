import React from "react";
import { useEffect } from "react";
import {FaAward} from 'react-icons/fa'
import { education } from "./constants";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Resume() {



  return (
    <div id='resume' className="">
      

      <div  className="mb-[50px]">
            <p className="text-white text-center">My journy as a student</p>
            <h1 className="text-center font-serif text-4xl  text-cyan-400">Qualifications</h1>

          <div class="inline-flex items-center justify-center w-full">
              <hr class="w-96 h-1 my-4 bg-cyan-800 border-0 rounded" />
               <div class="absolute px-4 -translate-x-1/2 bg-black left-1/2 ">
                 <FaAward color="cyan" size={25}/>
               </div>
          </div>
        </div>

      <div className=" flex justify-center lg:mt-[60px] relative">
        <div className="">
          <div className=" lg:ml-[100px]">
            {education.map((item) => {
              return (
                <div className="">
                  <div className="flex justify-between items-center divide-x-2  divide-cyan-400 ">

                    <div className="hidden md:block">
                      <h1 className="  ">
                        <em data-aos="fade-left" className=" text-white bg-cyan-700 bg-opacity-50 px-2 py-1 rounded-xl ml-2 border-2 border-cyan-400">
                        {item.starting}-{item.YearOfPassing}
                        </em>
                      
                      </h1>
                    </div>

                  <div className="border-2 border-cyan-800 bg-cyan-800 rounded-full w-4 h-4 relative left-[20px] overflow-visible"></div>


                    <div  className=" ml-3 w-[340px] sm:w-[400px] md:w-[530px] lg:w-[600px] ">
                         <em  className="date text-white bg-cyan-700 bg-opacity-50 px-2 py-1 rounded-xl ml-4 md:hidden block ">
                          {item.starting}-{item.YearOfPassing}
                        </em>
                      
                      <h3 className="text-sm  md:text-xl lg:text-2xl flex-wrap font-semibold  text-white ml-4 mt-5">
                        {item.UniversityName}
                      </h3>

                      <div className="flex  gap-6 items-center mt-1 my-6 ">
                        <p className="text-sm md:text-xl text-white ml-4">
                         {item.specialization}
                      </p>
                      
                      <p className="text-white text-sm md:text-xl">
                         {item.Achievements}
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
