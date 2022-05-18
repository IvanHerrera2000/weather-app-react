import React, { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form
      className={style.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        placeholder="Search city..."
        onChange={(e) => handleInputChange(e)}
        className={style.input}
      />
      <input className={style.button} type="submit" value="Add city" />
    </form>
  );
}
