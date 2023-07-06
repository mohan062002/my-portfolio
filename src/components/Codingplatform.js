import React from "react";
import { useEffect } from "react";
import {FaAward} from 'react-icons/fa'
import leetcode from '../accets/leetcode.png';
import gothub from'../accets/gothub.jpg';
import cheff from'../accets/cheff.png';
import "aos/dist/aos.css";
import Aos from "aos";

// import { platform } from "./constants";

const platform=[
  {
    "pname":"Leetcode",
    "pimage":leetcode,
    "plink":"https://leetcode.com/Mohan062002/"
  },
  {
    "pname":"Github",
    "pimage":gothub,
    "plink":"https://github.com/mohan062002"
  }
  ,
  {
    "pname":"Codecheff",
    "pimage":cheff,
    "plink":"https://www.codechef.com/"
  }
]

export default function Codingplatform() {

  useEffect(() => {
    Aos.init({ duration: 1000});
  }, []);
 
  return (
   <div id="coding" className="mt-[100px]">
        <div data-aos="fade-up" className="mb-[50px]">
            <p className="text-white text-center">Know about coding skills</p>
            <h1 className="text-center font-serif text-4xl  text-cyan-400">Coding Platforms</h1>

          <div class="inline-flex items-center justify-center w-full">
              <hr class="w-96 h-1 my-4 bg-cyan-800 border-0 rounded" />
               <div class="absolute px-4 -translate-x-1/2 bg-black left-1/2 ">
                 <FaAward color="cyan" size={25}/>
               </div>
          </div>
        </div>

         
       <div className="flex flex-col ml-[50px]  md:flex-row  justify-center md:gap-7" id='profile'>
      {platform.map((e) => {
          return( 
          <div data-aos="fade-up" className="bg-cyan-500 rounded-xl flex-wrap p-2 mx-4 mb-[20px] w-[250px] md:w-[350px]  hover:transition-ease-in-out hover:scale-110  duration-300">
              <a href={e.plink}>
              <img src={e.pimage} alt="" className="rounded-xl h-[150px]  md:h-[200px] hover:brightness-50  hover:scale-110  duration-300" />
              </a>
              {/* <h1 className="text-center text-xl text-white">{e.pname}</h1> */}
          </div>)
      })}
    </div>

   </div>
  );
}
