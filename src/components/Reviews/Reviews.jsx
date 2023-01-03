import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../services/Api';

import {
  Container,
  ReviewList,
  ReviewItem,
  Name,
  Text,
} from './Reviews.styled';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(id).then(response => updateReviews(response));

    const updateReviews = ({ data }) => {
      const normData = data.results.map(({ author, content, id }) => {
        return { author, content, id };
      });

      if (normData.length === 0) {
        return;
      }

      setReviews(normData);
    };
  }, [id]);

  if (!reviews) {
    return (
      <p style={{ padding: '15px' }}>We can't find information for a reviews</p>
    );
  }

  return (
    <Container>
      <ReviewList>
        {reviews.map(({ author, content, id }) => (
          <ReviewItem key={id}>
            <Name>Author: {author}</Name>
            <Text>{content}</Text>
          </ReviewItem>
        ))}
      </ReviewList>
    </Container>
  );
};
