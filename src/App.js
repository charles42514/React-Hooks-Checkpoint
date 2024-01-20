// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import { moviesData } from './Utils/MoviesData';
import MovieDetails from './Components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState(moviesData);

  const handleFilterChange = (filter) => {
    const filteredMovies = moviesData.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        movie.rating.toString().includes(filter.rate)
    );

    setMovies(filteredMovies);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Movie Library</h1>
                <Filter onFilterChange={handleFilterChange} />
                <MovieList movies={movies} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
