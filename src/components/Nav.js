import React, { useEffect } from 'react'
import {ImHome} from 'react-icons/im';
import{HiInformationCircle}from 'react-icons/hi';
import {GiSkills} from "react-icons/gi"
import{MdCastForEducation} from 'react-icons/md';
import { MdConstruction} from 'react-icons/md';
import {RiContactsBookFill } from 'react-icons/ri';
import {SiCodio} from 'react-icons/si';
import {Link} from 'react-scroll'

import 'aos/dist/aos.css';
import Aos from 'aos';


 const Nav = () => {

  useEffect( ()=>{
    Aos.init({ duration:2000 })
   },[]);
   
  return (

    
    //  <div  className='flex md:flex-col  justify-center  items-center   md:space-y-4'></div>
    <div  className='flex   md:flex-col  justify-center space-x-2  md:space-x-0   md:space-y-4'>

    <Link to="header" spy={true} smooth={true}  duration={500} offset={-90} delay={200}><ImHome className='fill-cyan-400  h-[35px] w-[35px] hover:scale-105  active:bg-cyan-500 active:fill-sky-800 bg-sky-800 rounded-full p-2   ml-1 sm:ml-0 md:mx-1 '/></Link>

    <Link to="about" spy={true} smooth={true}  duration={500} offset={-90} delay={200}><HiInformationCircle className='fill-cyan-400      h-[35px] w-[35px]  hover:scale-105 active:bg-cyan-500 active:fill-sky-800 bg-sky-800 rounded-full p-2   ml-1 sm:ml-0 md:mx-1 '/></Link>


    <Link to="resume" spy={true} smooth={true}  duration={500} offset={-90} delay={200}><MdCastForEducation className='fill-cyan-400      h-[35px] w-[35px] hover:scale-105 active:bg-cyan-500 active:fill-sky-800 bg-sky-800 rounded-full p-2   ml-1 sm:ml-0 md:mx-1 '/></Link>

    <Link to="experience" spy={true} smooth={true}  duration={500} offset={-90} delay={200}><GiSkills className='fill-cyan-400      h-[35px] w-[35px]  hover:scale-105 active:bg-cyan-500 active:fill-sky-800 bg-sky-800 rounded-full p-2    ml-1 sm:ml-0 md:mx-1 '/></Link>

    <Link to="project" spy={true} smooth={true}  duration={500} offset={-90} delay={200}><MdConstruction   className='fill-cyan-400      h-[35px] w-[35px]  hover:scale-105 active:bg-cyan-500 active:fill-sky-800 bg-sky-800 rounded-full p-2   ml-1 sm:ml-0 md:mx-1 '/></Link>
 
    <Link to="coding" spy={true} smooth={true}  duration={500} offset={-90} delay={200}><SiCodio className='fill-cyan-400      h-[35px] w-[35px] hover:scale-105 active:bg-cyan-500 active:fill-sky-800 bg-sky-800 rounded-full p-2  ml-1 sm:ml-0 md:mx-1 '/></Link>

   <Link to="contact" spy={true} smooth={true}  duration={500} offset={-90} delay={200}><RiContactsBookFill className='fill-cyan-400 h-[35px] w-[35px] hover:scale-105 active:bg-cyan-500 active:fill-sky-800 bg-sky-800 rounded-full p-2  ml-1 sm:ml-0 md:mx-1 '/></Link>

    </div>
  )
}
export default Nav;
