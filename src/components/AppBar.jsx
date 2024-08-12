import React from 'react';
import SearchBar from './SearchBar';

const AppBar = ({ onClick }) => {
  return (
    <div className="p-4 bg-indigo-200 flex justify-between items-center shadow-lg">
      <div className="text-3xl font-bold text-indigo-900 drop-shadow-lg">Weather App</div>
      <div>
        <SearchBar onClick={onClick} />
      </div>
    </div>
  );
};

export default AppBar;
