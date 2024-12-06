import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Button from '../components/button';

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      console.log(`Searching for: ${searchTerm}`);
    }
  };

  const handleButtonClick = () => {
    // redirect logic here
  };

  return (
    <div className="navbar">
      <div className="search-bar">
      
        <input
          type="text"
          placeholder="Search for Musics,Artists ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <span className="material-icons">search</span>
        </button>
      </div>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        
        <Button label="Log in" onClick={handleButtonClick} className="create-button"/>
        <Button label="Sign Up" onClick={handleButtonClick} />
      </div>
    </div>
  );
};
