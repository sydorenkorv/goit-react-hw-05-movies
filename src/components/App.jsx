import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from 'components/Loader/Loader';
import Navigation from './Navigation/Navigation';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export function App() {
  //home
  //movies

  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </>
  );
}
