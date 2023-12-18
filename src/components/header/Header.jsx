import React from 'react';
import styles from './Header.module.css';
import { LanguageContext } from '../../contexts/LanguageContext';

const Header = () => {
  const { setLanguage } = React.useContext(LanguageContext);
  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsScroll(true);

        return true;
      }

      setIsScroll(false);
    });

    return window.removeEventListener('scroll', window);
  });

  const changeLanguage = ({ target }) => {
    if (target.checked) return setLanguage('la');

    setLanguage('br');
  };

  return (
    <header className={`${styles.container} ${isScroll ? styles.scroll : ''}`}>
      <a href="/" className={styles.logo}>
        MSR
      </a>

      <div className={styles.switchContainer} onClick={changeLanguage}>
        <input
          value="private"
          name="switch"
          id="switch"
          type="checkbox"
          className={styles.input}
        />
        <label htmlFor="switch">
          <span className={styles.switchText}>Orações </span>
          <span className={styles.toggleText}>
            <span className={styles.switchUnchecked}>
              <span className={styles.hiddenLabel}>Unchecked: </span>Português
            </span>
            <span className={styles.switchChecked}>
              <span className={styles.hiddenLabel}>Checked: </span>Latim
            </span>
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;
