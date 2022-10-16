import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from  'swiper';
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
    <div className="h-[200px] flex flex-row items-center hover:bg-[#7ed957] py-2 p-4 rounded-lg cursor-pointer mb-2">
        <div className="flex-1 flex flex-row justify-between items-center">
            <div className="relative w-full h-46 group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'} `}>
                        <PlayPause 
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            song={song}
                            handlePause={handlePauseClick}
                            handlePlay={handlePlayClick}/>
                </div>    
            <img className="w-46 h-46 rounded-lg" src={song?.images?.coverart} alt={song?.title}/>
            </div>
            <div className="flex-1 flex flex-col justify-center mx-3">
                <Link to={`/songs/${song.key}`}>
                    <p className="text-xl font-bold text-black">{song?.title}</p>
                </Link>
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                    <p className="text-base text-black mt-1">{song?.subtitle}</p>
                </Link>
            </div>
        </div>
    </div>
)

const TopPlay = () => {
    const dispatch = useDispatch();

    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data } = useGetTopChartsQuery();

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    })

    const topPlays = data?.slice(0, 5);

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i}));
        dispatch(playPause(true));        
    };

    return(
        <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 max-w-full flex flex-col">
            <div className="w-full flex flex-col mt-6">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="font-bold text-3xl text-black text-left">Top Charts</h2>
                    <Link to="/top-charts">
                        <p className="text-black text-base cursor-pointer">See more</p>
                    </Link>
                </div>
                    <div className="mt-4 flex flex-row">
                        {topPlays?.map((song, i) => (
                            <TopChartCard 
                                key={song.key}
                                song={song}
                                i={i}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                handlePauseClick={handlePauseClick}
                                handlePlayClick={() => handlePlayClick(song, i)}
                            />
                        ))}
                    </div>
            </div>
        </div>
    )
};

export default TopPlay;