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
      <nav className='navMenu'>
        <ul className="menuItems">
          <li><Link to="/"> DH Odonto </Link></li>
          <li><Link to="/"> Home </Link> </li>
          <li><Link to="/contact"> Contact </Link></li>
          <li><Link to="/favoritos"> Favoritos </Link> </li>
          <li><button onClick={handlerChangeTheme}>
            Change theme 
            {
              state.theme === 'dark' || !state.theme ? <>🌒</> : <>☀️</>
            }
          </button></li>
        </ul>      
    </nav>
  )
}
export default Navbar