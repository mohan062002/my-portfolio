import React from 'react'
import {BsInstagram }from 'react-icons/bs';
import{ BsGithub} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';


export default function Conect() {
  return (
    <div >
       <a href="https://www.instagram.com/"><BsInstagram data-aos="fade-up" className='fill-cyan-300 w-[25px] h-[25px] mt-[20px] hover:fill-cyan-200  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'/></a>
       <a href="https://github.com/mohan062002"><BsGithub  data-aos="fade-up"className='fill-cyan-300 w-[25px] h-[25px] mt-[20px] hover:fill-cyan-200  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'/></a>
       <a href="https://www.linkedin.com/in/mohan-agarmore-b20aa322a/"><FaLinkedin data-aos="fade-up" className='fill-cyan-300 w-[25px] h-[25px] mt-[20px] hover:fill-cyan-200  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'/></a>

    </div>
  )
}
