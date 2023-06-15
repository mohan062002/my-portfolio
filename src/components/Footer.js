import React from 'react'
import {GrSettingsOption} from 'react-icons/gr'

 const Footer = () => {
  return (
   <footer className='bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-600 py-10'>
     
     <div className='flex justify-center gap-2 md:gap-6 items-center'>
      <GrSettingsOption className='h-[30px] w-[30px]  md:h-[35px] md:w-[35px] '/>
      <h1 className='text-center  sm:text-xl md:text-3xl lg:text-4xl uppercase font-serif font-medium underline underline-offset-8'>Thank's for visiting portfolio</h1>
      <GrSettingsOption className='h-[30px] w-[30px]  md:h-[35px] md:w-[35px] '/>
     </div>
   
   </footer>
  )
}

export default Footer