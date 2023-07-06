import React, { useEffect, useState } from "react";
import Experiencedcomp1 from "./Experiencedcomp1";
import { FaAward } from "react-icons/fa";
import {BsCodeSlash} from "react-icons/bs"
import {AiOutlineDown} from "react-icons/ai"
import "aos/dist/aos.css";
import Aos from "aos";

export default function Experience() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const experties = [
    [
      { skill: "C", percentage: 95 },
      { skill: "C++", percentage: 95 },
      { skill: "Python", percentage: 80 },
      { skill: "Java", percentage: 75 },
    ],
    [
      { skill: "HTML", percentage: 95 },
      { skill: "CSS", percentage: 85 },
      { skill: "Javascript", percentage: 80 },
      { skill: "Tailwind CSS", percentage: 95 },
    ],
     [
      { skill: "React.js", percentage: 90 },
      { skill: "Node.js", percentage: 75 },
      { skill: "Express.js", percentage: 75 },
      { skill: "MongoDB", percentage: 70 },
      { id: "TECHNOLOGIES", skill: "Django", percentage: 75 }, 
    ],
       [
      { skill: "git", percentage: 65 },
      { skill: "github", percentage: 60 },
      { skill: "vs code", percentage: 60 },
      { skill: "website hosting", percentage: 65 },
      { skill: "exel", percentage: 70 },
    ],
  ];
  const [skill1, setSkill1] = useState(true);
  const showskill = () => {
    setSkill1(!skill1);
    console.log(skill1);
  };
  const [skill2,setSkill2]=useState(true);
   const showskill1 = () => {
    setSkill2(!skill2);
    console.log(skill1);
  };

  const [Skill3,setSkill3]=useState(false);
   const showskill3 = () => {
    setSkill3(!Skill3);
    console.log(setSkill3);
  };

    const [skill4,setSkill4]=useState(false);
   const showskill4 = () => {
    setSkill4(!skill4);
    console.log(skill4);
  };


  return (
    <section id="experience" className="mt-[100px]">
      <div data-aos="fade-up" className="text-center">
        <p className="font-serif text-white ">What skills i have</p>
        <h1 className="font-serif text-4xl text-cyan-400"> My experience</h1>

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-96 h-1 my-4 bg-cyan-800 border-0 rounded" />
          <div class="absolute px-4 -translate-x-1/2 bg-black left-1/2">
            <FaAward color="cyan" size={25} />
          </div>
        </div>
      </div>

      <div className="md:mx-10 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <div className="flex justify-between bg-cyan-600 w-full p-2 ">
                <div className="ml-10">
                  <BsCodeSlash color="black" size={35}/>
                </div>
              <button onClick={showskill} className="">
                <h1 className="text-white">
                 {experties[0].id}PROGRAMMING LANGUAGES
                </h1>
              </button>
                 <div className="mr-10">
                  {
                    skill1===true?<AiOutlineDown color="black" size={35}/>:<div className="rotate-180 transition-all duration-100"><AiOutlineDown color="black" size={35}/></div>
                  }
                 </div>
            </div>
            <div>
              {skill1===true?
                <Experiencedcomp1
                  experience={experties[0]}
                  title={experties[0].id}
                />:<div className="transition-all duration-150 delay-200"></div>
              }
            </div>
          </div>

           <div className="">
            <div className="flex justify-between bg-cyan-600 w-full p-2 ">
                <div className="ml-10">
                  <BsCodeSlash color="black" size={35}/>
                </div>
              <button onClick={showskill1} className="">
                <h1 className="text-white">
                  {experties[1].id}DEVELOPMENT
                </h1>
              </button>
                 <div className="mr-10">
                  {
                    skill2===true?<AiOutlineDown color="black" size={35}/>:<div className="rotate-180 transition-all duration-100"><AiOutlineDown color="black" size={35}/></div>
                  }
                 </div>
            </div>
            <div>
              {skill2 && (
                <Experiencedcomp1
                  experience={experties[1]}
                  title={experties[1].id}
                />
              )}
            </div>
          </div>

              <div className="">
            <div className="flex justify-between bg-cyan-600 w-full p-2 ">
                <div className="ml-10">
                  <BsCodeSlash color="black" size={35}/>
                </div>
              <button onClick={showskill3} className="">
                <h1 className="text-white">
                  {experties[2].id}WEB TECHNOLOGIES
                </h1>
              </button>
                 <div className="mr-10">
                  {
                    Skill3===true?<AiOutlineDown color="black" size={35}/>:<div className="rotate-180 transition-all duration-100"><AiOutlineDown color="black" size={35}/></div>
                  }
                 </div>
            </div>
            <div>
              {Skill3 && (
                <Experiencedcomp1
                  experience={experties[2]}
                  title={experties[2].id}
                />
              )}
            </div>
          </div>


              <div className="">
            <div className="flex justify-between bg-cyan-600 w-full p-2 ">
                <div className="ml-10">
                  <BsCodeSlash color="black" size={35}/>
                </div>
              <button onClick={showskill4} className="">
                <h1 className="text-white">
                  {experties[3].id}DEVELOPMENT TOOLS
                </h1>
              </button>
                 <div className="mr-10">
                  {
                    skill4===true?<AiOutlineDown color="black" size={35}/>:<div className="rotate-180 transition-all duration-100"><AiOutlineDown color="black" size={35}/></div>
                  }
                 </div>
            </div>
            <div>
              {skill4 && (
                <Experiencedcomp1
                  experience={experties[3]}
                  title={experties[3].id}
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
