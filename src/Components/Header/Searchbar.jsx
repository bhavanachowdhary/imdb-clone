import React, { useState } from 'react'
import './Searchbar.css'
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
        <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
        </div>
  )
}

export default Searchbar
