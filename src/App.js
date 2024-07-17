import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://dummyapi.online/api/movies')
      .then(response => {
        console.log(response.data); // Verify the data structure
        setMovies(response.data);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Movie Database</h1>
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{movie.movie}</h5>
                <p className="card-text">Rating: {movie.rating}</p>
                <a href={movie.imdb_url} className="btn btn-primary">View on IMDB</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
