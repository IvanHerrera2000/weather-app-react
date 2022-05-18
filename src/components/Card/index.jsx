import React from 'react';
import style from './Card.module.css';

export default function Card({ max, min, name, img, onClose }) {
  return (
    <div className={style.container}>
      <button onClick={onClose} className={style.button}>
        X
      </button>
      <h4 className={style.name}>{name}</h4>
      <div className={style.infoContainer}>
        <p>Min: {min}°</p>
        <p>Max: {max}°</p>
      </div>
      <div className={style.imgContainer}>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="img"
          className={style.img}
        ></img>
      </div>
    </div>
  );
}
