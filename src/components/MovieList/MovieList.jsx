import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieList, MovieItem, MovieLink } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (!movies) {
    return;
  }

  return (
    <MovieList>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          <MovieLink to={`${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
