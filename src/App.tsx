import Header from './components/header';
import './App.css';
import MovieCard from './components/movie-card';
import { useEffect, useState } from 'react';
import { Movie } from './types';
import Filter from './components/filter';
import { makeRequest } from './utils/requests';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    makeRequest.get<Movie[]>('/films').then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Filter />
      <div className="movies-container">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
