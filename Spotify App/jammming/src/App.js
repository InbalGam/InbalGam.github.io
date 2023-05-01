import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/SearchResults';
import { useState } from 'react';
import Playlist from './components/Playlist';

function App() {
  //const [isAdded, setIsAdded] = useState(false);
  let resList = [{songName:"bla bla", artist:"Beatles", album:"123"}, {songName:"bla bla doo doo", artist:"Britney", album:"hello"}];
  let chosen = [{songName:"blues", artist:"Griddy", album:"123sss"}, {songName:"bla bla doo doo", artist:"Britney", album:"hello"}];

  return (
    <div className="App">
      <body className="App-body">
        <SearchBar />
        <Results resList={resList}/>
        <Playlist chosen={chosen}/>
      </body>
    </div>
  );
};

export default App;
