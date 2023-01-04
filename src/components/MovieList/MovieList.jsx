import PropTypes from 'prop-types';
import { useLocation, NavLink } from 'react-router-dom';

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
          <NavLink to={`${id}`} state={{ from: location }}>
            {title}
          </NavLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
