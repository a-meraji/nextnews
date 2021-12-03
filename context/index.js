import React, { useState, useReducer, createContext } from "react";
import reducer from "./Reducer";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState("");

  const initialState = { notify: {} };
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const value = { category, setCategory, state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
