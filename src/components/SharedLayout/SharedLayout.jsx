import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';

import {
  Container,
  Header,
  Navigation,
  HeaderLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <HeaderLink to="/" end>
            Home
          </HeaderLink>

          <HeaderLink to="/movies">Movies</HeaderLink>
        </Navigation>
      </Header>

      <main>
        <Suspense
          fallback={
            <div display-flex="flex">
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
