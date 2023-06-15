import React from "react";
import { useState} from "react";
import { TfiEmail } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import {FaAward} from 'react-icons/fa'
import { AiOutlineMessage } from "react-icons/ai";
import "aos/dist/aos.css";


const Contact = () => {
  const [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });

  let name, value;
  const saveinfo = (e) => {
    name = e.target.name;
    value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const postdata = async (e) => {
    e.preventDefault();
    const {email,subject,message}=contact; 
  
    if(email|| subject|| message)
    {
      const response = await fetch(
        "https://contact-info-8941a-default-rtdb.firebaseio.com/mycontact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
                   },
          body:JSON.stringify({
            email,
            subject,
            message,
          })
        }
      );
      if(response)
      {
        setContact({
          email: "",
          subject: "",
          message: "",
        })
        alert("response sucessfully submitted");
      }
   }
   else
   {
    alert("please fill all data");
   }
  };


 

  return (
    <section id="contact" className="mt-[150px] ">
      <div >
        <p className="text-white font-serif  text-center">Get in touch </p>
        <h1 className="text-cyan-500 font-serif text-4xl text-center">
          Contact us
        </h1>
        <div class="inline-flex items-center justify-center w-full mb-4">
              <hr class="w-96 h-1 my-4 bg-cyan-800 border-0 rounded" />
               <div class="absolute px-4 -translate-x-1/2 bg-black left-1/2 ">
                 <FaAward color="cyan" size={25}/>
               </div>
          </div>
      </div>

      <div className="grid   grid-cols-1 grid-flow-row-dense md:grid-cols-2  items-center gap-3 place-item-center ">
        {/* div for contact form  */}

        <div className="grid  lg:grid-cols-1 grid-rows-3 gap-3 place-items-center ">
          <div className="bg-cyan-500 p-4 h-auto  w-[200px] lg:w-[230px] rounded-2xl  place-items-center">
            <span>
              <TfiEmail className="w-[20px] h-[20px] ml-1" />
            </span>
            <h1 className=" font-serif text-2xl">email</h1>
            <p>
              <a href="mohanagarmore610@gmail.com " id="txt-color">
                {" "}
                mohanagarmore610@gmail
              </a>
            </p>
            <a href="#demo " className="  font-serif font-semibold ">
              {" "}
              Send message{" "}
            </a>
          </div>

          <div  className="bg-cyan-500 w-[200px] lg:w-[230px]   p-4  rounded-2xl place-items-center">
            <span>
              {" "}
              <BsWhatsapp className="w-[20px] h-[20px] ml-1" />
            </span>
            <h1 className=" font-serif text-2xl">WhatsApp</h1>
            <p>
              <a href="mohanagarmore610@gmail.com " id="txt-color">
                {" "}
                +91684651646
              </a>
            </p>
            <a href="#demo " className="  font-serif font-semibold ">
              {" "}
              Send message{" "}
            </a>
          </div>

          <div className="bg-cyan-500 w-[200px]  lg:w-[230px]  p-4  rounded-2xl place-items-center">
            <span>
              <AiOutlineMessage className="w-[20px] h-[20px] ml-1" />
            </span>
            <h1 className=" font-serif text-2xl">Messanger</h1>
            <p>
              <a href="mohanagarmore610@gmail.com " id="txt-color">
                mohanagarmore
              </a>
            </p>
            <a href="#demo " className="  font-serif font-semibold ">
              {" "}
              Send message{" "}
            </a>
          </div>
        </div>

        <div  className=" mx-4 mt-4 sm:mx-0 sm:mt-0 max-w-xl">
          <section className=" dark:bg-gray-900 rounded-2xl">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <form action="#" method="POST" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-cyan-500"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={contact.email}
                    onChange={saveinfo}
                    className="shadow-sm  border border-cyan-500  text-sm rounded-lg bg-cyan-800 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 0 placeholder-white text-sky-100 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-cyan-500"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contact.subject}
                    onChange={saveinfo}
                    className="shadow-sm  border border-cyan-500  text-sm rounded-lg bg-cyan-800 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 0 placeholder-white text-sky-100 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-cyan-500"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contact.message}
                    onChange={saveinfo}
                    rows={6}
                    className="shadow-sm  border border-cyan-500  text-sm rounded-lg bg-cyan-800 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 0 placeholder-white text-sky-100 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Leave a comment..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  onClick={postdata}
                  className="bg-transparent hover:bg-cyan-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded justify-center"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
