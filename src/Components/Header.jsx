import React, { useContext, useEffect, useState } from 'react'
import logo from "./../assets/Images/logo.jpg"
import { HiSun, HiMoon, HiMagnifyingGlass } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const {theme, setTheme} = useContext(ThemeContext);

    useEffect(()=>{
        console.log("Theme",theme)
    },[])
    useEffect(()=>{
        setTheme(localStorage.getItem('theme')? localStorage.getItem('theme'):'dark')
    },[])
    return (
        <div className='flex text-black items-center p-3'>
            <img className=' bg-inherit rounded-full' src={logo} width={60} height={60} alt="logo" />
            <div className='flex bg-slate-300 p-2 w-full mx-5 rounded-full items-center'>
                <HiMagnifyingGlass />
                <input type="text" placeholder='Search Games' className='bg-transparent px-2 outline-none dark:text-black' />
            </div>
            <div className=''>
                {theme=='light' ?
                    (<HiMoon className='text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer'
                        onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}} />
                    ) : (
                    <HiSun className='text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer'
                        onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}} />
                    )}
            </div>
        </div>
    )
}

export default Header