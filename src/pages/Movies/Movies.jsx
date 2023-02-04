import { useEffect, useState } from 'react';
import { getMoviesByQuery } from 'api/api';
import { Notify } from 'notiflix';
import { MovieList } from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { FaSearch } from 'react-icons/fa';
import css from './Movies.module.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query?.trim()) return;
    const fetchTrends = async query => {
      try {
        setIsLoading(true);
        const receivedMovies = await getMoviesByQuery(query);
        if (receivedMovies.length === 0) {
          Notify.info(`No results for ${query}`);
        }
        setMovies(receivedMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrends(query);
  }, [query]);

  useEffect(() => {
    if (error === null) return;
    Notify.failure(`some error occured ${error}`);
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    if (e.currentTarget.search.value === '') {
      Notify.warning('The input field is empty!');
    }
    setSearchParams({ query: e.currentTarget.search.value });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input name="search" className={css.input} placeholder="search..." />
        <button type="submit" className={css.btn}>
          <FaSearch />
        </button>
      </form>
      {isLoading && <Loader />}
      <MovieList movieList={movies} />
    </>
  );
}

export default Movies;
