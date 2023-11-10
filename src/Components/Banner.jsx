import React, { useEffect } from 'react'

const Banner = ({gameBanner}) => {
    useEffect(()=>{
    },[])
  return (
    <div className='w-full flex flex-col items-center relative'>
        <div className='  absolute bottom-0 bg-gradient-to-t from-slate-900 to-transparent w-[80%] p-3'>
          <h2 className='text-[30px] font-bold text-white  '>{gameBanner.name}</h2>
          <button className='bg-blue-500 px-2 p-1 mb-5'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} alt="gamebanner" className=' md:h-[500px] w-[80%] object-cover rounded-xl'/>
    </div>
  )
}

export default Banner