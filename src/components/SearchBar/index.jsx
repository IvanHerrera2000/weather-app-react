import React from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={style.container}>
      <input type="text" placeholder="search city..." className={style.input}/>
      <button onClick={() => props.onSearch('Buscando...')} className={style.button}>Search</button>
    </div>
  );
}
