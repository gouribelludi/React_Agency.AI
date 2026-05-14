import React, { useState } from 'react'
import assets from '../assets/assets'
import logo from '../assets/logo.svg'
import logo_dark from '../assets/logo_dark.svg'
import Toggelbutton from './Toggelbutton'
import { motion } from "motion/react"

const Navbar = ({ theme ,settheme}) => {

const[sidebaropen, setsidebaropen] = useState(false);



  return (
    <motion.div 
    initial={{y:-50, opacity:0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.6, ease: "easeOut"}}
    className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium  bg-white/50 dark:bg-gray-900/70'>

    <img src={theme === 'dark' ? logo_dark : logo} className='w-32 sm:w-40'  alt="Logo"/>

    <div className={`text-gray-800 dark:text-white-200 sm:text-sm ${!sidebaropen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'}
    max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 trnsition-all `}>

      <img src={assets.close_icon} width={20} className='absolute top-6 right-6 cursor-pointer sm:hidden' alt="close" 
      onClick={()=>setsidebaropen(false)}/>

      <a href="#hero" onClick={()=>setsidebaropen(false)} className='text-gray-800 dark:text-white sm:hover:border-b'>Home</a>
      <a href="#services"  onClick={()=>setsidebaropen(false)} className='text-gray-800 dark:text-white sm:hover:border-b'>Services</a>
      <a href="#ourwork"  onClick={()=>setsidebaropen(false)} className='text-gray-800 dark:text-white sm:hover:border-b'>Our Work</a>
      <a href="#contact-us"  onClick={()=>setsidebaropen(false)} className='text-gray-800 dark:text-white sm:hover:border-b'>Contact</a>
    </div>

   

    <div className='flex items-center gap-2 sm:gap-4'>

         <Toggelbutton theme={theme} settheme={settheme}/>

          <img src={theme==="dark"? assets.menu_icon_dark : assets.menu_icon} width={20} className='cursor-pointer sm:hidden' alt="theme" onClick={()=>setsidebaropen(true)}/>

      <a herf="contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white  px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
        Connect <img src={assets.arrow_icon} width={14}  alt="arrow"/>

      </a>
    </div>




















    </motion.div>
  )
}

export default Navbar