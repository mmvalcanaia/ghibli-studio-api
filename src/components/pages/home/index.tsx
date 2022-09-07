import './styles.css';
import MovieCard from 'components/movie-card';
import { useEffect, useState } from 'react';
import { Movie } from 'types';
import { makeRequest } from 'utils/requests';
import { Link } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    makeRequest.get<Movie[]>('/films').then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <>
      {/* <Filter /> */}
      <div className="movies-container">
        {movies.map((movie) => {
          return (
            <Link to={`films/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
