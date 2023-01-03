import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const TrendingList = styled.ul``;

export const TrendingItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const TrendingLink = styled(NavLink)``;
