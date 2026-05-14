import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { motion } from "motion/react"

const Teams = () => {
  return (

    <div>

         <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{once:true}}
         id='teams' className='flex flex-col items-center gap-7 px-4 sm:px-12 xl:px-40 lg:px-24 pt-30 text-gray-700 dark:text-white'>

    <Title  title="Meet Our Team" desc="A passionate team of digital experts dedicated to creating exceptional experiences."/>
</motion.div>

<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>

   {teamData.map((team, index) => (
    <motion.div 
    initial={{y: 20, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.4, delay: index * 0.1}}
    viewport={{once:true}}
    key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-700 dark:shadow-white/5 hover:scale-103 transition-all duration-400 '>
        <img src={team.image} alt="" className='rounded-full w-12 h-12 ' />
        <div className='flex'>
            <h3 className='text-sm font-bold'>{team.name}</h3>
        <p className='text-xs opacity-60'>{team.role}</p>
        </div>
    </motion.div>
  ))}
</div>
    </div>
  )
}

export default Teams