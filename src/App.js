
import React, { useState } from 'react';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
      rating: 9.3,
    },
   
  ]);

  const [filter, setFilter] = useState({
    title: '',
    rating: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilter({ ...filter, [filterType]: value });
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating.toString().includes(filter.rating)
  );

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <div className="add-movie-form">
        <h2>Add a New Movie</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddMovie({
              title: e.target.title.value,
              description: e.target.description.value,
              posterURL: e.target.posterURL.value,
              rating: parseFloat(e.target.rating.value),
            });
          }}
        >
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" required />

          <label htmlFor="description">Description:</label>
          <textarea id="description" required></textarea>

          <label htmlFor="posterURL">Poster URL:</label>
          <input type="text" id="posterURL" required />

          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" min="0" max="10" step="0.1" required />

          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default App;
