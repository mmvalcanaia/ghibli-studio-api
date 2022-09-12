import MovieCardFavorite from 'components/movie-card-favorite';
import { useEffect, useState } from 'react';
import { Movie } from 'types';

import './styles.css';

function Favorites() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('Favorites') as string);
    setFavorites(favorites);
  }, []);

  return (
    <div className="main-favorite-movies-container">
      <h2 className="favorites-title">Your favorites</h2>
      <div className="favorite-movies-container">
        {favorites?.map((movie) => {
          return <MovieCardFavorite key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default Favorites;
