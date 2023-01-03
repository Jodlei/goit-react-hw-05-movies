import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import {
  TrendingList,
  TrendingItem,
  TrendingLink,
} from './TrendingFilmList.styled';

const TrendingFilmList = ({ trendingFilms }) => {
  const location = useLocation();

  return (
    <TrendingList>
      {trendingFilms.map(({ id, title }) => (
        <TrendingItem key={id}>
          <TrendingLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </TrendingLink>
        </TrendingItem>
      ))}
    </TrendingList>
  );
};

TrendingFilmList.propTypes = {
  trendingFilms: PropTypes.array.isRequired,
};

export default TrendingFilmList;
