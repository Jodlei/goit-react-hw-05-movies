import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetail/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path={'cast'} element={<Cast />}></Route>
            <Route path={'reviews'} element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// '/' home
// '/movies'
// '/movies/:movieId'
// /movies/:movieId/cast
// /movies/:movieId/reviews
