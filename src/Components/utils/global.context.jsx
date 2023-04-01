/* eslint-disable no-undef */
import { createContext, useContext, useState, memo, useReducer } from "react";


export const ContextGlobal = createContext();
// export const initialState = {theme: "light", data: []};


// const Theme = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//       //Theme: {state.theme}
//     0
//     )
// }

// function reducer(state, action) {
//     switch (action.type) {
//       case 'toggleTheme':
//         return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
//       default:
//         return state;
//     }
//   }



const ContextProvider = memo(({children}) => {
    
    return (
        <ContextGlobal.Provider value={{}} >
            {children}
        </ContextGlobal.Provider>
    )
})
export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal)