import { useEffect, useState } from 'react';
import { makeRequest } from 'utils/requests';
import { Movie } from '../../types';
import './styles.css';

type Props = {
  id: string;
};

function MovieCardDetails({ id }: Props) {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    makeRequest.get<Movie>(`/films/${id}`).then((response) => {
      setMovie(response.data);
    });
  }, []);

  return (
    <div className="movie-container">
      <img className="movie-banner" src={movie?.movie_banner} alt="" />
      <h4 className="movie-title">{movie?.title}</h4>
      <span className="original-title">{movie?.original_title}</span>
      <span className="movie-year">{movie?.release_date}</span>
    </div>
  );
}

export default MovieCardDetails;
