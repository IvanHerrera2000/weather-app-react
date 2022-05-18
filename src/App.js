import React from 'react';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import data from './data.js';
import './globalStyles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards cities={data} />
    </div>
  );
}

export default App;
