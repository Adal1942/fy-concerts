import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MusicPlayer from './components/MusicPlayer';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import TopPlay from './components/TopPlay';
import AroundYou from './pages/AroundYou'; 
import ArtistDetails from './pages/ArtistDetails'; 
import Discover from './pages/Discover'; 
import Search from './pages/Search'; 
import SongDetails from './pages/SongDetails'; 
import TopArtists from './pages/TopArtists'; 
import TopCharts from './pages/TopCharts'; 
import './App.css';
 
const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <SideBar />
      <div className="flex-1 flex flex-col bg-primary">
        <SearchBar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">         
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou/>} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-20 bottom-0 left-0 right-0 flex animate-slideup bg-primary border-t-2 border-t-neutral-300 backdrop-blur-lg z-10">
            <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
