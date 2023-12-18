import React from 'react';
import styles from './NavMisterieStep.module.css';
import { NavLink } from 'react-router-dom';

const NavMisterieStep = () => {
  const [currentPathname, setCurrentPathname] = React.useState(null);
  const pathname = window.location.pathname.split('/')[1];

  const startRef = React.useRef(),
    firstRef = React.useRef(),
    secondRef = React.useRef(),
    thirdRef = React.useRef(),
    fourthRef = React.useRef(),
    fifthRef = React.useRef(),
    endRef = React.useRef();

  React.useEffect(() => {
    const pathnameStep = window.location.pathname.split('/')[2];

    switch (pathnameStep) {
      case 'start':
        startRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;
      case 'first':
        firstRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;
      case 'second':
        secondRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;
      case 'third':
        thirdRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;

      case 'fourth':
        fourthRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;

      case 'fifth':
        fifthRef.current.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
        });
        break;

      default:
        break;
    }
  }, [pathname]);

  React.useEffect(() => {
    // separa a string em uma array usando o separador / e pega o segundo item da array
    setCurrentPathname(pathname);

    // console.log(pathname);
  }, [pathname]);

  const scrollCenterLink = (event) => {
    event.target.scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.container}>
      <NavLink
        to={`${currentPathname}/start`}
        ref={startRef}
        className={styles.link}
        onClick={scrollCenterLink}
      >
        Inicio
      </NavLink>
      <NavLink
        to={`${currentPathname}/first`}
        ref={firstRef}
        className={styles.link}
        onClick={scrollCenterLink}
      >
        Primeiro mistério
      </NavLink>
      <NavLink
        to={`${currentPathname}/second`}
        ref={secondRef}
        className={styles.link}
        onClick={scrollCenterLink}
      >
        Segundo mistério
      </NavLink>
      <NavLink
        to={`${currentPathname}/third`}
        ref={thirdRef}
        className={styles.link}
        onClick={scrollCenterLink}
      >
        Terceiro mistério
      </NavLink>
      <NavLink
        to={`${currentPathname}/fourth`}
        ref={fourthRef}
        className={styles.link}
        onClick={scrollCenterLink}
      >
        Quarto mistério
      </NavLink>
      <NavLink
        to={`${currentPathname}/fifth`}
        ref={fifthRef}
        className={styles.link}
        onClick={scrollCenterLink}
      >
        Quinto mistério
      </NavLink>
      <NavLink
        to={`${currentPathname}/end`}
        ref={endRef}
        className={styles.link}
        onClick={scrollCenterLink}
      >
        Fechamento
      </NavLink>
    </section>
  );
};

export default NavMisterieStep;
