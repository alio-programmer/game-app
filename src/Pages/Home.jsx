import React, {useEffect, useState} from 'react'
import GenreList from '../Components/GenreList'
import Globalapi from '../Services/Globalapi';
import Banner from '../Components/Banner';
import Trendinggame from '../Components/Trendinggame';
import GamesByGenreId from '../Components/GamesByGenreId';

const Home = () => {
    const [getGame, setgetGame] = useState([]);
    const [getGameByGenre, setgetGameByGenre] = useState([]);
    const [selectedgenrename, setselectedgenrename] = useState('Action');

    useEffect(()=>{
        getgameList();
        getGameListByGenresid(4);
    },[]);

    const getgameList = ()=>{
        Globalapi.getGameList.then((resp)=>{
            setgetGame(resp.data.results);
            setgetGameByGenre(resp.data.results);
        })
    }

    const getGameListByGenresid=(id)=>{
        console.log("GENREID", id);
        Globalapi.getGameListByGenreid(id).then((resp)=>{
            setgetGameByGenre(resp.data.results);
        })
    }
  return (
    <div className='text-black dark:text-white grid grid-cols-4 px-5'>
        <div className='hidden md:block'>
            <GenreList setgetGameByGenre={(gameid)=>getGameListByGenresid(gameid)}
            selectedgenrename={(name)=>setselectedgenrename(name)}/>
        </div>
        <div className=' col-span-4 md:col-span-3 p-4 ml-10'>
            {getGame?.length>0&&getGameByGenre.length>0?
            <div className='w-full h-full'>
                <Banner className="w-full h-full flex flex-col items-center" gameBanner={getGame[0]}/>
                <Trendinggame trendingList={getGame}/>
                <GamesByGenreId getGamesBygenresid={getGameByGenre} selectedgenrename={selectedgenrename}/>
            </div>:null}
        </div>
    </div>
  )
}

export default Home