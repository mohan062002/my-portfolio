import React, { useEffect } from "react";
import Experiencedcomp1 from "./Experiencedcomp1";
import {FaAward} from 'react-icons/fa'
import "aos/dist/aos.css";
import Aos from "aos";

export default function Experience() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const experties = [
    [
      { id:"Front end", skill: "HTML", experience: "expert" },
      { skill: "CSS", experience: "expert" },
      { skill: "Tailwind CSS", experience: "expert" },
      { skill: "Javascript", experience: "expert" },
      { skill: "React js", experience: "expert" },
    ],
    [
      {id: "Back End ",skill: "Django",experience: "expert",},
      {skill: "Nodejs",experience: "expert",},
      {skill: "Mysql",experience: "expert",},
      {skill: "mongoDB",experience: "moderate",},
      {skill: "ExpressJS",experience: "moderate",},
      {skill: "Dsa", experience: "expert",},
    ],
  ];

  return (
    <section id="experience" className="mt-[100px]">
      <div data-aos="fade-up" className="text-center">
        <p className="font-serif text-white ">What skills i have</p>
        <h1 className="font-serif text-4xl text-cyan-400"> My experience</h1>

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-96 h-1 my-4 bg-cyan-800 border-0 rounded" />
          <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <FaAward color="cyan" size={25}/>
          </div>
        </div>
        

      </div>

      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-flow-row-dense gap-y-8 md:grid-cols-2 place-items-center mt-[100px] ">
        {experties.map((e) => (
          <Experiencedcomp1 experience={e} title={e[0].id} />
        ))}
      </div>
    </section>
  );
}
