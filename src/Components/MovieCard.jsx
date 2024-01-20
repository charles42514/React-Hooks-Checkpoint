// components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${encodeURIComponent(movie.title)}`} className="movie-card-link">
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
