import React,{useEffect} from 'react'
import {BiCheck} from 'react-icons/bi';
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Servicescomp11() {

    useEffect( ()=>{
        Aos.init({ duration:2000 })
       },[]);

  return (
  
    <div data-aos="fade-up ">
    <article className='bg-sky-800 rounded-b-2xl mx-5 max-w-md'>
      <div className="font-serif  text-xl font-semibold bg-cyan-500 text-center p-2 rounded-b-2xl"> UI/UX design </div>
      <ul className=''>
        <li className=" flex  mb-[10px] mt-[10px]  ">
          <span className='ml-1 mr-2'>
            <BiCheck  className="fill-white w-[25px] h-[25px]"/>
          </span>
          <p className="text-white font-serif">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Tenetur, atque?
          </p>
        </li>

        <li className=" flex  mb-[10px]">
          <span className='ml-1 mr-2'>
            <BiCheck  className="fill-white w-[25px] h-[25px]"/>
          </span>
          <p className="text-white font-serif">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Tenetur, atque?
          </p>
        </li>

        <li className=" flex mb-[10px] ">
          <span className='ml-1 mr-2'>
            <BiCheck  className="fill-white w-[25px] h-[25px]"/>
          </span>
          <p className="text-white font-serif">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Tenetur, atque?
          </p>
        </li>

        <li className=" flex  mb-[10px]">
          <span className='ml-1 mr-2'>
            <BiCheck  className="fill-white w-[25px] h-[25px]"/>
          </span>
          <p className="text-white font-serif">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Tenetur, atque?
          </p>
        </li>

        <li className=" flex mb-[10px] ">
          <span className='ml-1 mr-2'>
            <BiCheck  className="fill-white w-[25px] h-[25px]"/>
          </span>
          <p className="text-white font-serif">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Tenetur, atque?
          </p>
        </li>
      </ul>
    </article>
  </div>
  )
}
