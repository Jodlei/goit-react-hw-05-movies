import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

import { MovieList, MovieItem } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (!movies) {
    return;
  }

  return (
    <MovieList>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        </MovieItem>
      ))}
    </MovieList>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
