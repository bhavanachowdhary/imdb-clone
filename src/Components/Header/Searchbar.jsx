import React, { useState } from 'react'
import './Searchbar.css'
import logo from '../header/logo1.png'


const Searchbar = () => {
    
    const [searchQuery, setSearchQuery] = useState('');
    const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
    // Perform search or API request with the searchQuery value
    console.log('Perform search for:', searchQuery);
    };

    return (
      <div className='container'>
      <div className='searchbar'>
        <img src={logo} className='logo'/>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="search-btn" onClick={handleSearchClick}>
          Search
        </button>
        <a className='link'>Sign In</a>
        

      </div>
      </div>
  )
}

export default Searchbar
