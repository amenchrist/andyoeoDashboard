import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {

  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Dark');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [ onCourseDetails, setOnCourseDetails ] = useState(true);
  const [ onPersonalInfo, setOnPersonalInfo ] = useState(false);
  const [ onStatement, setOnStatement ] = useState(false);
  const [ onDocuments, setOnDocuments ] = useState(false);
  const [ onSubmitApp, setOnSubmitApp ] = useState(false);
  const [ newApp, setNewApp ] = useState(false);
  const [ tableData, setTableData ] = useState([]);
  const [ activeApp, setActiveApp ] = useState('');
  const [ application, setApplication ] = useState({});

  

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  const contextStateVars = {
    onCourseDetails,
    onPersonalInfo,
    onStatement,
    onDocuments,
    onSubmitApp,
    setOnCourseDetails,
    setOnPersonalInfo,
    setOnStatement,
    setOnDocuments,
    setOnSubmitApp,
    newApp, 
    setNewApp,
    tableData,
    setTableData,
    activeApp,
    setActiveApp, application, setApplication
  }

  //currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={contextStateVars}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);