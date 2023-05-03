import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/SearchResults';
import { useState } from 'react';
import Playlist from './components/Playlist';
import {generateId} from './components/utilities';

function App() {
  const [tracks, setTracks] = useState([]);


  const [playTracks, setPlayTracks] = useState([]);


  function getTracks(resultsTracks) {
    let convertResults = resultsTracks.tracks.items.map((el) => {
      return {
        id: generateId(),
        songName: el.name,
        artist: el.artists[0].name,
        album: el.album.name,
        uri: el.uri
      }});
    setTracks(() => convertResults);
  };


  function addTrackToPlaylist(track) {
    setPlayTracks((prev) => [track, ...prev]);
    setTracks((tracks) => tracks.filter((el) => el.id !== track.id));
  };
  

  function removeTrackFromPlaylist(track) {
    setPlayTracks((playTracks) => playTracks.filter((el) => el.id !== track.id));
    setTracks((prev) => [track, ...prev]);
  };


  function reset() {
    setPlayTracks([]);
  };


  return (
    <div className="App">
      <body className="App-body">
        <SearchBar getTracks={getTracks} />
        <Results tracks={tracks} onButtonClick={addTrackToPlaylist} />
        <Playlist tracks={playTracks} onButtonClick={removeTrackFromPlaylist} reset={reset} />
      </body>
    </div>
  );
};

export default App;
