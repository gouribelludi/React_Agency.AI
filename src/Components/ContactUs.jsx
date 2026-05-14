import React from 'react'
import Title from './Title';
import assets from '../assets/assets';
import toast from 'react-hot-toast';
import { motion } from "motion/react"


const ContactUs = () => {


  const onSubmit = async(e) => {
       e.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "cc9d53fc-ae30-4f79-82b3-5a011d5ab902");

    try {
       const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if(data.success) {
      // setResult(data.success ? "Success!" : "Error");
      toast.success("Form submitted successfully!");
    e.target.reset();
    // alert("Form submitted successfully!");
    } 
    else {
      // alert("There was an error submitting the form.");
      // setResult(data.message || "Error");
      toast.error("There was an error submitting the form.",data.message);
    }
    

    } catch (error) {
      toast.error(error.message);
    }

   
  

  };

  return (
    

        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}  
        transition={{staggerChildren:0.2}}
        id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 xl:px-40 lg:px-24 pt-30 text-gray-700 dark:text-white'>

    <Title  title="Reach Out To Us" desc="From strategy to execution, we craft digital experiences that drive results."/>

    < motion.form 
    initial={{y: 30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.5,delay: 0.4}}
    viewport={{once:true}}
    onSubmit={onSubmit} className='grid  sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

          <div>
            <p className='mb-2 text-sm font-medium'>Your Name</p>
          <div className='flex border border-gray-300 dark:border-gray-600 rounded-lg  pl-3'>
              <img src={assets.person_icon}/>
              <input type='text' name='name' placeholder='Enter Your Name' className=' w-full p-3 text-sm outline-none' required/>  
            </div>
          </div>

           <div>
            <p className='mb-2 text-sm font-medium'>Your Email</p>
          <div className='flex border border-gray-300 dark:border-gray-600 rounded-lg  pl-3'>
              <img src={assets.email_icon}/>
              <input type='email'name='email' placeholder='Enter Your Email' className=' w-full p-3 text-sm outline-none' required/>  
            </div>
          </div>

          <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium'>Your Message</p>
            <textarea name='message' placeholder='Enter Your Message'rows={8} className=' w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required />
          </div>

          <button type='submit'className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all' >
            Submit <img src={assets.arrow_icon} className='w-4'/>
          </button>

      </motion.form>

    </motion.div>


  )
}

export default ContactUs