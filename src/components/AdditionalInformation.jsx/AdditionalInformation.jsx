import { InfoLink, Container } from './AdditionalInformation.styled';
import { useLocation } from 'react-router-dom';

export const AdditionalInformation = () => {
  const location = useLocation();

  return (
    <Container>
      <h4>Additional information</h4>
      <ul style={{ display: 'flex' }}>
        <li key={1} style={{ marginRight: '15px' }}>
          <InfoLink to={'cast'} state={{ from: location.state?.from }}>
            Cast
          </InfoLink>
        </li>
        <li key={2}>
          <InfoLink to={'reviews'} state={{ from: location.state?.from }}>
            Reviews
          </InfoLink>
        </li>
      </ul>
    </Container>
  );
};
