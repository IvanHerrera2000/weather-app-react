import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import City from './components/City';
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
          const city = {
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            name: resource.name,
            weather: resource.weather[0].main,
            clouds: resource.clouds.all,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon,
          };
          setCities((oldCities) => [...oldCities, city]);
        } else {
          alert('City not found');
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  function onFilter(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Navbar onSearch={onSearch} />
      <Route exact path="/">
        <Cards cities={cities} onClose={onClose} />
      </Route>
      <Route
        exact
        path="/city/:id"
        render={({ match }) => <City city={onFilter(match.params.id)} />}
      />
    </div>
  );
}

export default App;
