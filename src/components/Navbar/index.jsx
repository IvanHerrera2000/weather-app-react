import React from 'react';
import SearchBar from '../SearchBar';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar({ onSearch }) {
  return (
    <div className={style.container}>
      <Link to="/" className={style.title}>
        Henry - Weather App
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Navbar;
