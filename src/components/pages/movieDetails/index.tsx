import './styles.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types';
import { makeRequest } from 'utils/requests';

type UrlParams = {
  movieId: string;
};

function MovieDetails() {
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    makeRequest.get<Movie>(`/films/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="movie-details-main">
      <div className="movie-details-container">
        <div className="movie-details-banner-title-container">
          <img className="movie-details-banner" src={movie?.movie_banner} alt="" />
          <h4 className="movie-details-title base-field">{movie?.title}</h4>
          <span className="movie-details-original-title base-field">{movie?.original_title}</span>
        </div>
        <div className="movie-details-info-container">
          <p className="movie-details-description base-field">{movie?.description}</p>
          <span className="movie-details-year base-field">Release date: {movie?.release_date}</span>
          <span className="movie-details-director base-field">Director: {movie?.director}</span>
          <span className="movie-details-running-time base-field">{movie?.running_time} min.</span>
          <span className="movie-details-score base-field">Tomatometer: {movie?.rt_score}%</span>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
