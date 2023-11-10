import React, { useEffect, useState } from 'react'
import Globalapi from '../Services/Globalapi'

const GenreList = ({setgetGameByGenre,selectedgenrename}) => {

    const [genreList, setgenreList] = useState([]);
    const [activeIndex, setactiveIndex] = useState();

    useEffect(()=>{
        getGenreList();
    },[]);

    const getGenreList=()=>{
        Globalapi.getGenreList.then((resp)=>{
            setgenreList(resp.data.results);
        })
    }
  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white p-2'>Genre</h2>
        {genreList.map((item,index)=>(
            <div 
            onClick={()=>{setactiveIndex(index);setgetGameByGenre(item.id); selectedgenrename(item.name)}}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 hover:font-bold dark:text-white ${activeIndex==index?'bg-gray-300 scale-105 font-bold dark:bg-gray-600':null}`}>
                <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg ' alt="" />
                <h3>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList