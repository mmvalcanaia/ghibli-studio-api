import './styles.css';
import MovieCard from 'components/movie-card';
import { useEffect, useState } from 'react';
import { makeRequest } from 'utils/requests';
import { Movie } from 'types';

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const handleFavoriteClick = (movie: Movie) => {
    const existingMoviesFromLocalStorage = JSON.parse(localStorage.getItem('Favorites') as string);
    let favMovies: Movie[] = existingMoviesFromLocalStorage
      ? [...existingMoviesFromLocalStorage]
      : [];
    if (favMovies.find((m) => m.id === movie.id)) {
      favMovies = favMovies.filter((m: Movie) => m.id != movie.id);
    } else {
      favMovies = [...favMovies, movie];
    }
    setFavoriteMovies(favMovies);
    localStorage.setItem('Favorites', JSON.stringify(favMovies));
  };

  useEffect(() => {
    makeRequest.get<Movie[]>('/films').then((response) => {
      setMovies(response.data);
    });
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem('Favorites') as string);
    setFavoriteMovies(moviesFromLocalStorage ? moviesFromLocalStorage : []);
  }, []);

  return (
    <>
      {/* <Filter handleInputChange={onChange}/> */}
      <div className="movies-container">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              addMovieToFavoritesList={handleFavoriteClick}
              favorites={favoriteMovies}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
