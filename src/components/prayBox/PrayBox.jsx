import React from 'react';
import styles from './PrayBox.module.css';
import infoIcon from '../../assets/info-icon.svg';
import arrowIcon from '../../assets/arrow-icon.svg';
import { LanguageContext } from '../../contexts/LanguageContext';

import dataPrays from '../../../prays.json';

const PrayBox = ({ prayData }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const { language } = React.useContext(LanguageContext);

  const handleOpenPray = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li className={`${styles.container} ${isOpen ? styles.active : ''}`}>
        <div className={styles.prayHeader} onClick={handleOpenPray}>
          <h3 className={styles.prayName}>
            {dataPrays.br[prayData.name].name}{' '}
            {prayData.quantity && `(${prayData.quantity})`}
          </h3>

          <img src={arrowIcon} alt="" className={styles.headerIcon} />
        </div>

        <div className={styles.prayContent}>
          <p className={styles.prayText}>
            {dataPrays[language][prayData.name].text}
          </p>

          {dataPrays.br[prayData.name].info && (
            <div className={styles.infoBox}>
              <img src={infoIcon} alt="info icon" className={styles.infoIcon} />
              <p className={styles.infoText}>
                {dataPrays.br[prayData.name].info}
              </p>
            </div>
          )}
        </div>
      </li>
    </>
  );
};

export default PrayBox;
