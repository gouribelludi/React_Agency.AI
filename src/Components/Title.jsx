import React from 'react'
import { motion } from "motion/react"

const Title = ({title,desc}) => {
  return (
    <>
    <motion.h2 
      initial={{y: 30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      viewport={{once:true}}
      className='text-3xl font-medium  sm:text-5xl'
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{y: 20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.2}}
      viewport={{once:true}}
      className='max-w-lg text-center text-gray-500 dark:text-white/80 mb-6'
    >
      {desc}
    </motion.p>
    </>
  )
}

export default Title