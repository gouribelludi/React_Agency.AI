import React, { use } from 'react'
import assets from '../assets/assets';
import { useState } from 'react';
import { useRef } from 'react';
import { motion } from "motion/react"


const ServiceCard = ({service, index}) => {

        const [position, setposition] = useState({x:0, y:0});
        const [visible, setvisible] = useState(false);

        const divref = useRef(null);

        const handelMouseMove = (e) =>{
            const rect = divref.current.getBoundingClientRect();
            setposition({x: e.clientX - rect.left, y: e.clientY - rect.top});
        }


  return (
    <motion.div
    initial={{y: 30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.5, delay: index * 0.2}}
    viewport={{once:true}}
    className='relative overflow-hidden max-w-lg sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10' ref={divref} onMouseMove={handelMouseMove}
    onMouseEnter={()=>{setvisible(true)}} onMouseLeave={()=>{setvisible(false)}} >

        <div className={`pointer-events-none absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500  w-[300] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten blur-2xl
         ${visible ? 'opacity-70' : 'opacity-0'}` }style={{top:position.y -150, left:position.x -150}}/>

           <div className='flex items-center  p-8 gap-10 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white  dark:bg-gray-900 relative z-10'>

            <div className='bg-gray-100 dark:bg-gray-700  rounded-full'>
                <img src={service.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
            </div>

            <div className='flex-1'>
                <h3 className='font-bold '>{service.title}</h3>
                <p className='text-sm  mt-2'>{service.description}</p>
            </div>

           </div>

        

    </motion.div>
  )
}

export default ServiceCard