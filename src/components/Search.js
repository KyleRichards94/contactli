import React from 'react';

//SeachBar  
// Html input that takes text on event handles the filterlist in app.js 
const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search: Name, Email or phone"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;