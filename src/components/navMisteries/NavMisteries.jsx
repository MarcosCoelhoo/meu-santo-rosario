import React from 'react';
import styles from './NavMisteries.module.css';
import { NavLink } from 'react-router-dom';

const NavMisteries = () => {
  const joyfulRef = React.useRef(),
    lightRef = React.useRef(),
    sorrowfulRef = React.useRef(),
    gloriousRef = React.useRef();

  const [misteriesList, setMisteriesList] = React.useState({
    joyful: null,
    light: null,
    sorrowful: null,
    glorious: null,
  });

  const pathname = window.location.pathname;

  React.useEffect(() => {
    const currentMisteriePathname = window.location.pathname.split('/')[1];

    switch (currentMisteriePathname) {
      case 'joyful':
        setMisteriesList({
          joyful: true,
          light: null,
          sorrowful: null,
          glorious: null,
        });
        break;
      case 'light':
        setMisteriesList({
          joyful: null,
          light: true,
          sorrowful: null,
          glorious: null,
        });
        break;
      case 'sorrowful':
        setMisteriesList({
          joyful: null,
          light: null,
          sorrowful: true,
          glorious: null,
        });
        break;
      case 'glorious':
        setMisteriesList({
          joyful: null,
          light: null,
          sorrowful: null,
          glorious: true,
        });
        break;
      default:
        break;
    }
  }, [pathname]);

  React.useEffect(() => {
    const pathnameMisterie = window.location.pathname.split('/')[1];

    switch (pathnameMisterie) {
      case 'joyful':
        joyfulRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;
      case 'light':
        lightRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;
      case 'sorrowful':
        sorrowfulRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;
      case 'glorious':
        gloriousRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;

      default:
        break;
    }
  }, [pathname]);

  const scrollCenterLink = (event) => {
    event.target.scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
    });
  };

  return (
    <nav className={styles.navContainer}>
      <NavLink
        to={'/joyful/start'}
        end
        className={`${styles.navBox} ${
          misteriesList.joyful && styles.activeLink
        }`}
        onClick={scrollCenterLink}
        ref={joyfulRef}
      >
        <span className={styles.navDate}>seg e sáb</span>
        <h2 className={styles.navTitle}>Mistérios Gozozos</h2>
      </NavLink>
      <NavLink
        to={'light/start'}
        className={`${styles.navBox} ${
          misteriesList.light && styles.activeLink
        }`}
        onClick={scrollCenterLink}
        ref={lightRef}
      >
        <span className={styles.navDate}>qui</span>
        <h2 className={styles.navTitle}>Mistérios Luminosos</h2>
      </NavLink>
      <NavLink
        to={'sorrowful/start'}
        className={`${styles.navBox} ${
          misteriesList.sorrowful && styles.activeLink
        }`}
        onClick={scrollCenterLink}
        ref={sorrowfulRef}
      >
        <span className={styles.navDate}>ter e sex</span>
        <h2 className={styles.navTitle}>Mistérios Dolorosos</h2>
      </NavLink>
      <NavLink
        to={'glorious/start'}
        className={`${styles.navBox} ${
          misteriesList.glorious && styles.activeLink
        }`}
        onClick={scrollCenterLink}
        ref={gloriousRef}
      >
        <span className={styles.navDate}>qua e dom</span>
        <h2 className={styles.navTitle}>Mistérios Gloriosos</h2>
      </NavLink>
    </nav>
  );
};

export default NavMisteries;
