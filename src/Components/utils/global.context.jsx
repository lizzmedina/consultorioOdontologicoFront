/* eslint-disable no-undef */
import { createContext, useContext, useState, useReducer, useEffect } from "react";

export const ContextGlobal = createContext(undefined);

const initialStateTheme = {theme: localStorage.getItem('theme'), data: []};

const reducerTheme = (state, action) => {
  switch (action.type) {
    case 'light':
      return { theme: false };
    case 'dark':
      return {theme: true}
    default:
      return state;
  }
}
const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducerTheme, initialStateTheme);
    
    const [odontologos, setOdontologos] = useState([]);

    const getOdontologos = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
      setOdontologos(data)
    }
    useEffect(()=> {  
      getOdontologos()
    }, [])

    useEffect(() => {
    const tipeTheme = state.theme ? 'light' : 'dark';
    localStorage.setItem('theme', tipeTheme);
    document.documentElement.setAttribute('data-base-theme', tipeTheme)
    }, [state.theme])
    
    return (
        <ContextGlobal.Provider 
          value={{state, dispatch, odontologos, setOdontologos}}>
            {children}
        </ContextGlobal.Provider>
    )
}
export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal)