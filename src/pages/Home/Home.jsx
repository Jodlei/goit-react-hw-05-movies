import React, { useEffect, useState } from 'react';
import { fetchTrending } from '../../components/services/Api';
import TrendingFilmList from '../../components/TrendingFilmList/TrendingFilmList';

import { Container, HomeTitle } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrending().then(response => {
      setFilms([...response.data.results]);
    });
  }, []);

  return (
    <Container>
      <HomeTitle>Trending Movies</HomeTitle>
      <TrendingFilmList trendingFilms={films} />
    </Container>
  );
};

export default Home;
