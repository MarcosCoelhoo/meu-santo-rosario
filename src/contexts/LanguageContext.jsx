import React from 'react';

export const LanguageContext = React.createContext();

export const LanguageStorage = ({ children }) => {
  const [language, setLanguage] = React.useState('br');

  React.useEffect(() => {}, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
