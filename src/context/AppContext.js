// src/context/AppContext.js
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <AppContext.Provider value={{ selectedDoctor, setSelectedDoctor }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
