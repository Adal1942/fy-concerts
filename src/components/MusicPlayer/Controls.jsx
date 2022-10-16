import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={18} color={repeat ? 'red' : '0f6b6b'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={25} color="0f6b6b" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={38} color="#0f6b6b" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={38} color="#0f6b6b" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && <MdSkipNext size={25} color="#0f6b6b" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={18} color={shuffle ? 'red' : '0f6b6b'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
);

export default Controls;
