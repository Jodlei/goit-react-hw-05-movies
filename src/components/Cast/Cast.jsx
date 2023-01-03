import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../components/services/Api';

import { Container, CastList, CastItem, Img, Text } from './Cast.styled';

export const Cast = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getMovieCredits(id).then(response => updateData(response));
  }, [id]);

  const updateData = response => {
    const { cast } = response.data;
    if (cast.length === 0) {
      return;
    }
    const castVal = cast.map(({ id, profile_path, name, character }) => {
      return { id, profile_path, name, character };
    });

    setData(castVal);
  };

  const path = profile_path => {
    const placeholder =
      'https://via.placeholder.com/400/000000/FFFFFF/?text=No photo';

    return profile_path
      ? `https://www.themoviedb.org/t/p/w500/${profile_path}`
      : placeholder;
  };

  if (!data) {
    return <p>We can't find information for a cast</p>;
  }

  return (
    <Container>
      <CastList>
        {data.map(({ id, profile_path, name, character }) => (
          <CastItem key={id}>
            <Img src={path(profile_path)} alt={name} />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </CastItem>
        ))}
      </CastList>
    </Container>
  );
};
