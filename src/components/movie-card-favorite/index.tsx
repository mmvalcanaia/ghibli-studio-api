import { IoIosHeart } from 'react-icons/io';
import { Movie } from 'types';
import './styles.css';

type Props = {
  movie: Movie;
};

function MovieCardFavorite({ movie }: Props) {
  return (
    <div className="movie-favorite-container">
      <img className="movie-favorite-banner" src={movie?.movie_banner} alt="" />
      <h4 className="movie-favorite-title">{movie?.title}</h4>
      <div className="movie-favorite-bottom-container">
        <span className="movie-favorite-original-title">{movie?.original_title}</span>
        <IoIosHeart className="movie-favorite-icon" />
      </div>
    </div>
  );
}

export default MovieCardFavorite;
