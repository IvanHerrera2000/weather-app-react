import React, { useState } from 'react';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import data from './data.js';
import './globalStyles.css';

function App() {
  const [cities, setCities] = useState([]);

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((resource) => {
        if (resource.main !== undefined) {
          console.log(resource);
        }
      });
  }

  return (
    <div className="App">
      <Navbar onSearch={onSearch} />
      <Cards cities={data} />
    </div>
  );
}

export default App;
