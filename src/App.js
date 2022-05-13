import React from 'react';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import data, { Cairns } from './data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
      <div>
        <Cards cities={data} />
      </div>
      <hr />
    </div>
  );
}

export default App;
