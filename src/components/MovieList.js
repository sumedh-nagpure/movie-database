import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://dummyapi.online/api/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error('Error fetching the movies:', error));
    }, []);

    return (
        <div className="movie-list">
            <h1>Movie List</h1>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
