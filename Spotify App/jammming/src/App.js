import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/SearchResults';
import { useState } from 'react';
import Playlist from './components/Playlist';

function App() {
  //const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="App">
      <body className="App-body">
        <SearchBar />
        <Results />
        <Playlist />
      </body>
    </div>
  );
};

export default App;
