import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/SearchResults';
import { useState } from 'react';
import Playlist from './components/Playlist';
import {generateId} from './components/utilities';

function App() {
  const [tracks, setTracks] = useState([
    {
      id: generateId(),
      songName: 'trial',
      artist: 'bla bla',
      album: '123'
    },
    {
      id: generateId(),
      songName: 'Griddy',
      artist: 'blues',
      album: 'hello'
    }
  ]);
  const [playTracks, setPlayTracks] = useState([
    {
      id: generateId(),
      songName: 'trial',
      artist: 'bla bla',
      album: '123'
    }
  ]);


  function addTrackToPlaylist(track) {
    setPlayTracks((prev) => [track, ...prev]);
    setTracks((tracks) => tracks.filter((el) => el.id !== track.id));
  };
  

  function removeTrackFromPlaylist(track) {
    setPlayTracks((playTracks) => playTracks.filter((el) => el.id !== track.id));
    setTracks((prev) => [track, ...prev]);
  };


  return (
    <div className="App">
      <body className="App-body">
        <SearchBar />
        <Results tracks={tracks} onButtonClick={addTrackToPlaylist} />
        <Playlist tracks={playTracks} onButtonClick={removeTrackFromPlaylist} />
      </body>
    </div>
  );
};

export default App;
