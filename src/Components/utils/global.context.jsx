/* eslint-disable no-undef */
import { createContext, useContext, useState, useReducer, useEffect } from "react";

export const ContextGlobal = createContext();

const initialStateTheme = {theme: "light", data: []};

const reducerTheme = (state, action) => {
  switch (action.type) {
    case 'dark':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return {theme: initialStateTheme.theme};
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

    const theme = state.theme === 'dark'? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' };

    return (
        <ContextGlobal.Provider 
          value={
            {theme, state, dispatch, 
              odontologos, setOdontologos}
            } >
            {children}
        </ContextGlobal.Provider>
    )
}
export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal)