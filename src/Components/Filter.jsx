// Filter.js
import React from 'react';
import './Styles.css';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        onChange={(e) => onFilterChange('title', e.target.value)}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        onChange={(e) => onFilterChange('rating', e.target.value)}
      />
    </div>
  );
};

export default Filter;
