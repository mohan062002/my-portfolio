import React,{useEffect} from 'react'
import demo from '../accets/expence.png'
import rental from '../accets/rental.png'
import expense from '../accets/expence.png'
import news from '../accets/news.png'
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Projectcomp(props) {

  //this useeffect will act as a componentdidmount
  useEffect( ()=>{
    Aos.init({ duration:2000 })
   },[]);

  return (
    <div   className='mb-8 flex flex-col md:flex-row gap-12'> 
<div data-aos=" fade-up" class=" w-[250px] lg:w-[330px] bg-white rounded-lg border border-cyan-500 shadow-md dark:bg-sky-800 dark:border-cyan-700 flex-col justify-center">
   
    <img src={rental} alt="demo img"  className="w-[200px] lg:w-[270px] rounded-lg place-items-center  ml-[28px] mt-[20px] shadow-2xl hover:brightness-75 hover:scale-110  duration-300"/>
    
    <div class="p-5">
       
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-center  text-white">Rental services</h5>
        
       
    <div className='flex justify-center'>
    <button className="bg-transparent hover:bg-cyan-500 text-cyan-500 font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border border-cyan-500 hover:border-transparent rounded justify-center">
       <a href="https://github.com/mohan062002/Rental_services"> Github</a>
     </button>

     <button  className= " rounded-lg text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm px-5 py-2.5 text-center mr-2 ml-5 ">
        <a href="/"> Live Demo</a>
     </button>
    </div>
    </div>
</div>

<div data-aos=" fade-up" class=" w-[250px] lg:w-[330px] bg-white rounded-lg border border-cyan-500 shadow-md dark:bg-sky-800 dark:border-cyan-700 flex-col justify-center">
   
    <img src={news} alt="demo img"  className="w-[200px] lg:w-[270px] rounded-lg place-items-center  ml-[28px] mt-[20px] shadow-2xl hover:brightness-75 hover:scale-110  duration-300"/>
    
    <div class="p-5">
       
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-center  text-white">News today</h5>
        
       
    <div className='flex justify-center'>
    <button className="bg-transparent hover:bg-cyan-500 text-cyan-500 font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border border-cyan-500 hover:border-transparent rounded justify-center">
       <a href="https://github.com/mohan062002/newstoday"> Github</a>
     </button>

     <button  className= " rounded-lg text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm px-5 py-2.5 text-center mr-2 ml-5 ">
        <a href="/"> Live Demo</a>
     </button>
    </div>
    </div>
</div>


<div data-aos=" fade-up" class=" w-[250px] lg:w-[330px] bg-white rounded-lg border border-cyan-500 shadow-md dark:bg-sky-800 dark:border-cyan-700 flex-col justify-center">
   
    <img src={expense} alt="demo img"  className="w-[200px] lg:w-[270px] rounded-lg place-items-center  ml-[28px] mt-[20px] shadow-2xl hover:brightness-75 hover:scale-110  duration-300"/>
    
    <div class="p-5">
       
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-center  text-white">SpriritousAdvantura</h5>
        
       
    <div className='flex justify-center'>
    <button className="bg-transparent hover:bg-cyan-500 text-cyan-500 font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border border-cyan-500 hover:border-transparent rounded justify-center">
       <a href="https://github.com/mohan062002/spirictousadvanture"> Github</a>
     </button>

     <button  className= " rounded-lg text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm px-5 py-2.5 text-center mr-2 ml-5 ">
        <a href="https://spiritusadventura.netlify.app/"> Live Demo</a>
     </button>
    </div>
    </div>
</div>


    </div>
  )
}
