import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesList } from '../../components/MovieList/MovieList';
import { searchMovies } from '../../components/services/Api';
import { Container } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmName, setFilmName] = useState(null);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    searchMovies(query).then(response => updateFilmName(response));
  }, [query]);

  const updateFilmName = response => {
    const { results } = response.data;
    setFilmName([...results]);
  };

  const SearchFormSubmit = event => {
    setSearchParams({ query: event.target.elements[0].value });
  };

  return (
    <Container>
      <SearchForm onSubmit={SearchFormSubmit} />
      <MoviesList movies={filmName} />
    </Container>
  );
};

export default Movies;
