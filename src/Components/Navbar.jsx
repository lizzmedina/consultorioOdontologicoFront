import {Link} from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

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
  
return (
      <nav className='navbar'>
        <Link to="/"> DH Odonto </Link>
        <Link to="/"> Home </Link> 
        <Link to="/contact"> Contact </Link>
        <Link to="/favoritos"> Favoritos </Link> 
        
        
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button 
        onClick={handlerChangeTheme}
      >
        Change theme ☀️ 🌒
      </button>
    </nav>
  )
}

export default Navbar