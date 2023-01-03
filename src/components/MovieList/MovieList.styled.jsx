import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieList = styled.ul``;
export const MovieItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const MovieLink = styled(NavLink)``;
