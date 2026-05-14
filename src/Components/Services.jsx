import React from 'react'
import Title from './Title';
import assets from '../assets/assets';
import ServiceCard from './ServiceCard';
import { motion } from "motion/react"

const Services = () => {


 const servicesData = [
    {
      title: "Advertising",
        description: "Building responsive and user-friendly websites that cater to your business needs.",
        icon:assets.ads_icon
    },
    {
      title: "Content marketing",
        description: "we help excute your plan and deliver result",
        icon:assets.marketing_icon
    },
    {
      title: "social media marketing",
        description: "Building responsive and user-friendly websites that cater to your business needs.",
        icon:assets.social_icon
    },
    {
      title: "content creation",
        description: "Building responsive and user-friendly websites that cater to your business needs.",
        icon:assets.content_icon
    }
];

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    
    id='services' className='relative flex flex-col items-center gap-7 text-gray-700 dark:text-white px-4 sm:px-24 pt-30 lg:px-24 xl:px-40 py-20'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-40 -z-1 dark:hidden' />

        <Title title="How we can help" desc="For strategy to execution, we offer a range of services to help your business grow." />

       <div className='flex flex-col md:grid grid-cols-2 gap-6'>
    {servicesData.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
    ))}
</div>

    </motion.div>
  )
}

export default Services