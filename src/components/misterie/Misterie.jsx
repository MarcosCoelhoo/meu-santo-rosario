import React from 'react';
import styles from './Misterie.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import PrayBox from '../prayBox/PrayBox';
import dataMisteries from '../../../misteries.json';

const Misterie = () => {
  // const [currentData, setCurrentData] = React.useState(dataMisteries);
  const { misterie, step } = useParams();

  if (!dataMisteries[misterie][step].prays) return <></>;
  return (
    <section className={styles.container}>
      {dataMisteries[misterie][step].title && (
        <div className={styles.introductionContainer}>
          <h2 className={styles.misterieTitle}>
            {dataMisteries[misterie][step].title}
          </h2>
          <p className={styles.misterieDescription}>
            {dataMisteries[misterie][step].description}
          </p>
        </div>
      )}

      <ul className={styles.prayList}>
        {dataMisteries[misterie][step].prays.map((prayData, index) => (
          <PrayBox prayData={prayData} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Misterie;
