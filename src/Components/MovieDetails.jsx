// components/MovieDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => encodeURIComponent(m.title) === title);

  if (!movie) {
    return <div>No movie found with the specified title.</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <div className="movie-info">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="details">
          <p>Description: {movie.description}</p>
          <p>Rating: {movie.rating}</p>
          <iframe
            title="Trailer"
            width="560"
            height="315"
            src={movie.trailerLink}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
