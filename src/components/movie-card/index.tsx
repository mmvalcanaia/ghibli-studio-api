import { Movie } from '../../types';
import './styles.css';

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  return (
    <div className="movie-container">
      <img className="movie-banner" src={movie.movie_banner} alt="" />
      <h4 className="movie-title">{movie.title}</h4>
      <span className="original-title">{movie.original_title}</span>
      <span className="movie-year">{movie.release_date}</span>
    </div>
  );
}

export default MovieCard;
