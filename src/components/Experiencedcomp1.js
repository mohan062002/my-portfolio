import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Experiencedcomp1(props) {

  const title=props.title;
  console.log(title)

  const  skilist = props.experience;
  console.log( `list is ${skilist}`);

  useEffect( ()=>{
    Aos.init({ duration:2000 })
   },[]);

  return (
    <div data-aos="fade-up">
        <div className= ' border border-cyan-500  shadow-cyan-700 shadow-2xl rounded-lg bg-transparent  p-5'>
           {/* subdiv using grid */}
           <h1 className='text-center font-serif text-2xl mt-5 font-medium text-cyan-500'>{title}</h1>
          <div className='grid  grid-cols-1 grid-flow-row-dense md:grid-cols-2 md:grid-flow-row-dense gap-x-5 gap-y-5 p-4'>

         { skilist.map(
          (e)=>(
            <div className='bg-cyan-500  w-[200px] md:w-[150px] lg:w-[230px] rounded-full text-center'>
            <span> </span>
            <h1 className='text-xl font-medium'>{e.skill}</h1>
            <p>{e.experience}</p>          
           </div>
          )
         )}

          
           </div>

          </div>

        </div>
  )
}
