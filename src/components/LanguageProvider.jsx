import React, {useState, useEffect, useContext, createContext} from 'react';

import { jsonEn } from './json_en';
import { jsonJp } from './json_jp';

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export const useLanContext = () => {
  return useContext(LanguageContext);
}
export const useLanUpdateContext = () => {
  return useContext(LanguageUpdateContext);
}

const LanguageProvider = ({children}) => {
  const [enLan, setEnLan] = useState();

  const [json, setJson] = useState(jsonJp);

  useEffect(() => {
    if (enLan) {
      setJson(jsonEn);
    } else {
      setJson(jsonJp);
    }
  }, [enLan]);
  const toggleLan = (newLan) => {
    setEnLan(newLan);
  };

  return (
    <LanguageContext.Provider value={json}>
      <LanguageUpdateContext.Provider value={toggleLan}>

        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };
