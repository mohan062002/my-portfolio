import React,{useEffect} from "react";
import Servicescomp11 from "./Servicescomp11";

import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Services() {

  useEffect( ()=>{
    Aos.init({ duration:2000 })
   },[]);

  return (
    <section data-aos="fade-up" id=" Services" className="mt-[60px]">
      <p className="text-white font-serif  text-center">What I offer</p>
      <h1 className="text-cyan-500 font-serif text-3xl text-center">Services</h1>


<div className="grid  grid-cols-1 grid-flow-row-dense lg:grid-cols-3  lg:grid-flow-row-dense gap-8 mt-14 place-items-center">
<Servicescomp11 />
<Servicescomp11/>
<Servicescomp11/>
</div>
    
    </section>
  );
}
