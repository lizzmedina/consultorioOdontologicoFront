import {Link} from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';
import { useState } from 'react';

const Navbar = () => {
  
  const {dispatch, state} = useContextGlobal(); 
  const theme = state.theme;

  const handlerChangeTheme = () => {
    if (theme) {
      dispatch(
        {type: 'light'
      })
    } else 
    dispatch(
      {type: 'dark'
    })
  }
  console.log(state.theme);
return (
      <nav className='navbar'>
        <Link to="/"> DH Odonto </Link>
        <Link to="/"> Home </Link> 
        <Link to="/contact"> Contact </Link>
        <Link to="/favoritos"> Favoritos </Link> 
        
      <button 
        onClick={handlerChangeTheme}
      >
        Change theme 
        {
          state.theme === 'dark' || !state.theme ? <>🌒</> : <>☀️</>
        }
      </button>
    </nav>
  )
}
export default Navbar