import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <SearchBar />
        <Results />
      </body>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <SearchBar />
//         <Results />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
