import Link from 'next/link';
import { useNavigation } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.navItem}>
          <Link href="#" passHref>
            <a className={navigation.active('#')}>Carte</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#" passHref>
            <a className={navigation.active('#')}>Explore</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#" passHref>
            <a className={navigation.active('#')}>Régions</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#" passHref>
            <a className={navigation.active('#')}>Evènements</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#" passHref>
            <a className={navigation.active('#')}>Favoris</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
