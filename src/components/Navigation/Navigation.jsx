import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link className={css.navLink} to="/">
            Home
          </Link>
        </li>
        <li className={css.navItem}>
          <Link className={css.navLink} to="/movies">
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
