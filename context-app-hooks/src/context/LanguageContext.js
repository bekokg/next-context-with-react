import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, changeLanguage ] = useState("french");
  const setLanguage = (e) => changeLanguage(e.target.value);

    return (
      <LanguageContext.Provider value={{language, setLanguage}}>
        {props.children}
      </LanguageContext.Provider>
    )
}