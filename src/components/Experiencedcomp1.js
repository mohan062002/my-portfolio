import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Experiencedcomp1(props) {
  const title = props.title;
  console.log(title);

  const skilist = props.experience;
  console.log(`list is ${skilist}`);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="  border border-cyan-500  shadow-cyan-700 shadow-2xl rounded-b-xl bg-transparent  p-5">
        {/* subdiv using grid */}
        <h1 className="text-center font-serif text-2xl mt-5 font-medium text-cyan-500">
          {title}
        </h1>
        <div className="">
          {skilist.map((e) => (

            <div className="grid grid-cols-5 items-center my-5">
              <div className="w-full mx-2 col-span-1 text-center text-white">{e.skill}</div>
              <div className=" col-span-3 bg-gray-200 h-2  rounded ">
                <div
                  className="bg-gradient-to-l from-cyan-800 via-cyan-700 to-cyan-500 h-full col-span-1"
                  style={{ width: `${e.percentage}%` }}
                >
                </div>
              </div>
              <div className="ml-4 col-span-1 text-white">
                {/* <div className="bg-cyan-600 w-1/2 text-center rounded-full">
                  {e.percentage}%
                </div> */}
                <span class="bg-cyan-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded  border border-cyan-400"> {e.percentage}%</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}
