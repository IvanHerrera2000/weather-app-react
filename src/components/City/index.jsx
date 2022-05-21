import React from 'react';
import style from './City.module.css';
//creo el componente funcional City que mostrará los detalles de una ciudad
//recibida por props en la ruta /ciudad/{ciudadId}
function City({ city }) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{city.name}</h2>
      <div>
        <div className={style.info}>
          <span>Temperatura:</span> {city.temp} ºC
        </div>
        <div className={style.info}>
          <span>Clima:</span> {city.weather}
        </div>
        <div className={style.info}>
          <span>Viento:</span> {city.wind} km/h
        </div>
        <div className={style.info}>
          <span>Cantidad de nubes:</span> {city.clouds}
        </div>
        <div className={style.info}>
          <span>Latitud:</span> {city.latitud}º
        </div>
        <div className={style.info}>
          <span>Longitud:</span> {city.longitud}º
        </div>
      </div>
    </div>
  );
}

export default City;
