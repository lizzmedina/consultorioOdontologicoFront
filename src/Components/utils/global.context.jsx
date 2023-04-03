/* eslint-disable no-undef */
import { createContext, useContext, useState, memo, useReducer } from "react";


export const ContextGlobal = createContext();

const initialState = {theme: "light", data: []};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dark':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return {theme: initialState.theme};
  }
}

const ContextProvider = memo(({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const theme = state.theme === 'dark' 
    ? { backgroundColor: 'black', color: 'white' } 
    : { backgroundColor: 'white', color: 'black' };

    return (
        <ContextGlobal.Provider value={{theme, state, dispatch}} >
            {children}
        </ContextGlobal.Provider>
    )
})
export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal)