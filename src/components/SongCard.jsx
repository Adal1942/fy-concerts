import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, i, data}) => {

    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = () => {
        dispatch(setActiveSong({ song, data, i}));
        dispatch(playPause(true));        
    };

    return(
        <div className="flex flex-col w-[150px] md:w-[200px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative w-full h-46 group rounded-lg">
                <div className={`absolute inset-0 justify-col-rev items-end p-2 bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'} `}>
                    <PlayPause 
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        song={song}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}/>
                </div>
                    <img src={song.images?.coverart} alt="song_img" className="rounded-lg"/>
            </div>
            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg text-primary truncate">
                    <Link to={`/songs/${song?.key}`}>
                        {song.title}
                    </Link>
                </p>
                <p className="text-sm truncate text-primary mt-1">
                    <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
                        {song.subtitle}
                    </Link>
                </p>
            </div>
        </div>
    );
    
};

export default SongCard;