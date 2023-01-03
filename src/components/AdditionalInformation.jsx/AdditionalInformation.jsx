import { InfoLink, Container } from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  return (
    <Container>
      <h4>Additional information</h4>
      <ul style={{ display: 'flex' }}>
        <li key={1} style={{ marginRight: '15px' }}>
          <InfoLink to={'cast'}>Cast</InfoLink>
        </li>
        <li key={2}>
          <InfoLink to={'reviews'}>Reviews</InfoLink>
        </li>
      </ul>
    </Container>
  );
};
