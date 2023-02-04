import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';

export const MovieList = ({ movieList }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {Array.isArray(movieList) &&
        movieList?.map(({ id, name, title, poster_path }) => {
          return (
            <Link
              className={css.movieLink}
              state={{ from: location }}
              key={id}
              to={`/movies/${id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                style={{ width: 200 }}
              />
              <p className={css.movieTitle}>{name || title}</p>
            </Link>
          );
        })}
    </ul>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};
