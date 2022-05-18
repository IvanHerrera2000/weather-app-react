import React from 'react';
import SearchBar from '../SearchBar';
import style from './Navbar.module.css';

function Navbar({ onSearch }) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Henry - Weather App</h2>
      <SearchBar />
    </div>
  );
}

export default Navbar;
