import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailWrap = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 11px black;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;
export const DetailsWrap = styled.div`
  margin-left: 30px;
`;

export const BackButton = styled(NavLink)`
  margin-left: 15px;
`;

export const MovieImage = styled.img`
  height: 400px;
`;

export const FilmTitle = styled.h3`
  margin-bottom: 30px;
`;
export const Title = styled.h3``;

export const TitleOverview = styled.h3``;
export const Text = styled.p`
  margin-bottom: 15px;
`;
