// Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({
    title: '',
    rate: '',
  });

  const handleInputChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    onFilterChange(filter);
  };

  return (
    <div className="filter">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={filter.title}
        onChange={handleInputChange}
      />

      <label htmlFor="rate">Rating:</label>
      <input
        type="text"
        id="rate"
        name="rate"
        value={filter.rate}
        onChange={handleInputChange}
      />

<label htmlFor="rate">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={filter.description}
        onChange={handleInputChange}
      />

      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
