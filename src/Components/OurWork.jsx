import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"


const OurWork = () => {

    const ourWorkData = [
        {
            title: "Mobile App Marketing",
            description: "We turn bold ideas into powerful didgital solutions that connect and engage...........",
            Image: assets.work_mobile_app
        },
        {
            title: "Dashboard Management",
            description: "we help you execute your plan and deliver result", 
            Image: assets.work_dashboard_management
        },
        {
            title: "Fitness App Promotion",
            description: "we help you create marketing strategies that drive results and grow your business.",
            Image: assets.work_fitness_app
        }
    ]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren:0.2}}
    viewport={{once:true}}
    id='ourwork' className='flex flex-col items-center gap-7 px-4 sm:px-12 xl:px-40 lg:px-24 pt-30 text-gray-700 dark:text-white'>

    <Title  title="Our Latest Work" desc="From strategy to execution, we craft digital experiences that drive results."/>

    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 w-full max-w-5xl'>

    {ourWorkData.map((work, index) => (
        <motion.div 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: index * 0.2}}
        viewport={{once:true}}
        key={index} className='hover:scale-102 duration-500  transition-all cursor-pointer '>
            <img src={work.Image} alt={work.title} className='rounded-xl w-full' />    
            <h3 className=' mt-3 mb-2 text-xl font-semibold'>{work.title}</h3>
            <p className='text-sm opacity-60 w=5/6'>{work.description}</p>
            </motion.div>
    ))}

        </div>


    </motion.div>
  )
}

export default OurWork