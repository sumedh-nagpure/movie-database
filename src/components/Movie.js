import React from 'react';
import './Movie.css';

const Movie = ({ movie }) => {
    return (
        <div className="movie">
            <h2>{movie.title}</h2>
            <p>Release Year: {movie.year}</p>
            <p>Genre: {movie.genre}</p>
        </div>
    );
};

export default Movie;
