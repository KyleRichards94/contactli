import React from 'react';

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