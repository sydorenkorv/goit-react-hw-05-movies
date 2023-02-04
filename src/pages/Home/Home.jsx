import React from 'react';
import { useState, useEffect } from 'react';
import { getTrends } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Notify } from 'notiflix';

function Home() {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const receivedTrends = await getTrends();
        setTrends(receivedTrends);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTrends();
  }, []);

  useEffect(() => {
    if (error === null) return;
    Notify.failure(`some error occured ${error}`);
  }, [error]);

  return (
    <>
      <h1>Trending</h1>
      <MovieList movieList={trends} />
    </>
  );
}

export default Home;
