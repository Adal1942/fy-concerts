import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={18} color={repeat ? 'red' : ''} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer text-secundary" />
    {currentSongs?.length && <MdSkipPrevious size={25} className="cursor-pointer text-secundary" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={38} onClick={handlePlayPause} className="cursor-pointer text-secundary" />
    ) : (
      <BsFillPlayFill size={38} onClick={handlePlayPause} className="cursor-pointer text-secundary" />
    )}
    {currentSongs?.length && <MdSkipNext size={25} className="cursor-pointer text-secundary" onClick={handleNextSong} />}
    <BsShuffle size={18} color={shuffle ? 'red' : ''} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer text-secundary" />
  </div>
);

export default Controls;
