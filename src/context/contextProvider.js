import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  notification: false,
  userprofile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [currentColor, setCurrentColor] = useState("#4e5666");
  const [screenSize, setScreenSize] = useState("");
  const [navbarClicked, setNavbarClicked] = useState(initialState);

  const handleNavbar_Clicked = (clicked) => {
    setNavbarClicked({ ...initialState, [clicked]: true });
  };

  const value = {
    activeMenu,
    setActiveMenu,
    currentColor,
    handleNavbar_Clicked,
    screenSize,
    setScreenSize,
    navbarClicked,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
