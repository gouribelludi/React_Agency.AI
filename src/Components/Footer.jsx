import React from 'react'
import assets from '../assets/assets';
import { motion } from "motion/react"


const Footer = ({ theme }) => {
  return (
    <motion.div 
    initial={{y: 50, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.8}}
    viewport={{once:true}}
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 '>
        {/* { Footer top} */}

        <div className='flex justify-between lg:items-center max-lg:flex-wrap gap-10'>
            
            <motion.div 
            initial={{x:-30, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6,delay: 0.2}}
            viewport={{once:true}}
            className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                <img src={theme=== "dark" ? assets.logo_dark : assets.logo} className='w-32 sm:w-44'/>
                <p className='max-w-md'> From strategy to execution, we craft digital experiences that drive results.</p>

                <ul className='flex gap-8'>
                    <li><a href="#hero" className='hover:text-primary'>Home</a></li>
                    <li><a href="#services" className='hover:text-primary'>Services</a></li>
                    <li><a href="#ourwork" className='hover:text-primary'>Our Work</a></li>
                    <li><a href="#contact-us" className='hover:text-primary'>Contact Us</a></li>
                </ul>
              
            </motion.div>

           


            <motion.div 
            initial={{x:30, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6,delay: 0.3}}
            viewport={{once:true}}
            className='text-gray-700 dark:text-gray-400 '>
                <h3 className=' font-semibold'>Subscribe to Our News Letter</h3>
                <p className='text-sm mt-2 mb-6'>The Lastest News Articles , and resourse , send to your inbox weekly</p>
                <div className='flex gap-2 text-sm'>
                    <input type='email' placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded bg-transparent border dark:border-gray-200  border-gray-300 dark:text-gray-400 '/>

                    <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded cursor-pointer hover:scale-103 transition-all'>Subscribe</button>
                </div>
                
            </motion.div>



        </div>
   <hr className='my-6 border-gray-300 dark:border-gray-600' />
   {/* {footer bottom} */}
   <motion.div 
   initial={{opacity: 0}}
   whileInView={{opacity: 1}}
   transition={{duration: 0.5,delay: 0.4}}
   viewport={{once:true}}
   className='pb-6 text-sm text-gary-500 flex justify-center sm:justify-between  flex-wrap gap-4'>
    <p className='text-gray-500'>Copyright 2026 @ GreatStack - All rights reserved. </p>
    <div className='flex items-center justify-between gap-4  '>
        <img src={assets.facebook_icon} />
        <img src={assets.twitter_icon} />
        <img src={assets.linkedin_icon} />
        <img src={assets.instagram_icon} />
    </div>
   </motion.div>

    </motion.div>
  )
}

export default Footer