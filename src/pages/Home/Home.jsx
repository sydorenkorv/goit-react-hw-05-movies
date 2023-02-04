import React from 'react';
import { useState, useEffect } from 'react';
import { getTrends } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';

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

  return (
    <>
      <h1>Trending</h1>
      <MovieList movieList={trends} />
    </>
  );
}

export default Home;
