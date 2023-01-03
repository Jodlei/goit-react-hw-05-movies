import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovieDetails } from '../../components/services/Api';
import { AdditionalInformation } from '../../components/AdditionalInformation.jsx/AdditionalInformation';

import {
  MovieDetailWrap,
  BackButton,
  MovieImage,
  DetailsWrap,
  FilmTitle,
  Title,
  TitleOverview,
  Text,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(response => updateMovieInfo(response.data));
  }, [id]);

  const updateMovieInfo = data => {
    const {
      poster_path,
      original_title,
      overview,
      release_date,
      vote_average,
      genres,
    } = data;

    setMovieInfo({
      poster_path,
      original_title,
      overview,
      release_date,
      vote_average,
      genres,
    });
  };
  if (!movieInfo) {
    return;
  }
  const {
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    genres,
  } = movieInfo;

  const genresItems = genres.map(obj => (
    <span
      style={{
        margin: 8,
      }}
      key={obj.key}
    >
      {obj.name}
    </span>
  ));
  return (
    <>
      <BackButton to={backLinkHref}>
        <b>Back to Movies</b>
      </BackButton>
      <MovieDetailWrap>
        <MovieImage
          src={`https://www.themoviedb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
        <DetailsWrap>
          <FilmTitle>
            {original_title} <span> ({release_date})</span>
          </FilmTitle>

          <Title>User score: </Title>
          <Text>{vote_average.toFixed(1) * 10}%</Text>

          {overview ? (
            <>
              <TitleOverview>Overview</TitleOverview>
              <Text>{overview}</Text>
            </>
          ) : null}

          <h4>Genres</h4>
          <Text>{genresItems}</Text>
        </DetailsWrap>
      </MovieDetailWrap>
      <AdditionalInformation />
      <Outlet></Outlet>
    </>
  );
};

export default MovieDetails;
