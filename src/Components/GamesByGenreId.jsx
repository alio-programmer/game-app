import React, { useEffect } from 'react'
import Globalapi from '../Services/Globalapi'

const GamesByGenreId = ({getGamesBygenresid, selectedgenrename}) => {
    return (
        <div>
            <h2 className='mt-3 text-[30px] font-bold dark:text-white'>{selectedgenrename} Games</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {getGamesBygenresid.map((item,index)=>(
                    <div key={index} className='m-3 transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center bg-slate-300 dark:bg-slate-600 h-[400px] cursor-pointer rounded-xl'>
                        <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover'/>
                        <h2 className='mt-3 font-bold'>{item.name}</h2>
                        <h2>⭐{item.rating}💬{item.reviews_count}🔥{item.suggestions_count}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GamesByGenreId