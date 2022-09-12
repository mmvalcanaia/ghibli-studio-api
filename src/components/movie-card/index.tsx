import { IoIosHeart, IoIosArrowDroprightCircle, IoIosHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Movie } from '../../types';

import './styles.css';

type Props = {
  movie: Movie;
  addMovieToFavoritesList: (movie: Movie) => void;
  favorites: Movie[];
};

function MovieCard({ movie, addMovieToFavoritesList, favorites }: Props) {
  const isFavorite = (movie: Movie) => {
    let verifyMovie = false;
    favorites?.forEach((favorite: Movie) => {
      if (favorite.id == movie.id) {
        verifyMovie = true;
      }
    });
    return verifyMovie;
  };

  return (
    <div className="movie-container">
      <img className="movie-banner" src={movie?.movie_banner} alt="" />
      <h4 className="movie-title">{movie?.title}</h4>
      <span className="original-title">{movie?.original_title}</span>
      <span className="movie-year">{movie?.release_date}</span>
      <div className="icons-container">
        {isFavorite(movie) ? (
          <IoIosHeart
            className="heart-icon"
            onClick={() => {
              addMovieToFavoritesList(movie);
            }}
          />
        ) : (
          <IoIosHeartEmpty
            onClick={() => {
              addMovieToFavoritesList(movie);
            }}
          />
        )}

        <Link to={`films/${movie.id}`}>
          <IoIosArrowDroprightCircle />
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
