import React, { use, useEffect } from 'react'
import assets from '../assets/assets';

export const Toggelbutton = ({ theme, settheme }) => {

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    settheme(theme||(prefersDarkMode ? "dark" : "light"));
  },[])

useEffect(() => {
  if(theme === "dark"){
    document.documentElement.classList.add("dark");}
    else{
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
},[theme])


  return (
    <div>
        <button onClick={()=>settheme(theme==="dark"? "light" : "dark")}>
            {theme==="dark"? 
            (<img src={assets.sun_icon}  className=' w-8 cursor-pointer border border-gray-500 rounded-full p-1' onClick={()=>settheme("light")} alt="moon"/>) : 
            (<img src={assets.moon_icon}  className='w-8 cursor-pointer border border-gray-500 rounded-full p-1' onClick={()=>settheme("dark")} alt="sun"/>)}
        </button>
    </div>
  )
}
export default Toggelbutton;

