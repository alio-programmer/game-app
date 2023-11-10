import React, { useEffect } from 'react'

const Trendinggame = ({trendingList}) => {
  return (
    <div className='hidden md:block mt-10'>
        <h2 className='dark:text-white font-bold text-[30px]'>Trending Games</h2>
        <div className='grid grid-cols-4'>
            {trendingList.map((items,index)=>index<4&&(
                <div className=''>
                    <div className='m-2 bg-slate-300 dark:bg-slate-600 transition-all duration-300 ease-in-out  h-[350px] cursor-pointer hover:scale-110 rounded-lg'>
                        <img src={items.background_image} className="h-[300px] object-cover rounded-lg"/>
                        <h2 className='mt-2 flex flex-col justify-center dark:text-white items-center text-[15px] font-bold'>{items.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Trendinggame