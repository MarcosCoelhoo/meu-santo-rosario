import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Misterie from '../misterie/Misterie';
import styles from './Main.module.css';
import NavMisteries from '../navMisteries/NavMisteries';
import NavMisterieStep from '../navMisterieStep/NavMisterieStep';

const Main = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const redirectToMisterieWeekDay = () => {
      const date = new Date();
      const options = { weekday: 'short' };
      const dateFormated = new Intl.DateTimeFormat('pt-BR', options).format(
        date,
      );

      const misterieMap = {
        'seg.': 'joyful/start',
        'ter.': 'sorrowful/start',
        'qua.': 'glorious/start',
        'qui.': 'light/start',
        'sex.': 'sorrowful/start',
        'sáb.': 'joyful/start',
        'dom.': 'glorious/start',
      };

      const redirectPath = misterieMap[dateFormated];
      if (redirectPath) {
        navigate(redirectPath);
      }
    };

    const pathname = window.location.pathname;

    if (pathname === '/') redirectToMisterieWeekDay();
  }, [navigate]);

  return (
    <>
      <NavMisteries />
      <main className={styles.main}>
        <NavMisterieStep />
        <Routes>
          <Route path="/:misterie/:step" element={<Misterie />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
