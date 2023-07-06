
import Projectcomp from './Projectcomp';
import {FaAward} from 'react-icons/fa'

export default function Project() {




  return (
    <section id="project" className='mt-[100px]'>
       <div >
        <p className='text-white font-serif  text-center'>My recent work</p>
        <h1 className='text-3xl text-cyan-500 font-serif text-center'> Projects</h1>

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-96 h-1 my-4 bg-cyan-800 border-0 rounded" />
          <div  class="absolute px-4 -translate-x-1/2 bg-black left-1/2 ">
            <FaAward color="cyan" size={25}/>
          </div>
        </div>

        </div>

        <div data-aos="fade-up" className='mt-[50px] flex flex-wrap justify-center gap-8  '>
          
           
                  <Projectcomp />
              
            
        </div>
    </section>
  )
}
