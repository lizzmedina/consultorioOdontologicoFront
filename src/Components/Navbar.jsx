import {Link} from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const {dispatch, state} = useContextGlobal();

  return (
      <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to="/"> DH Odonto </Link>
        <Link to="/"> Home </Link> 
        <Link to="/contact"> Contact </Link>
        <Link to="/favoritos"> Favoritos </Link>

        {/* BORRAR CUANDO FUNCIONE */}
        <hr />
        <p>{state.theme}</p>
        <hr />
        
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button 
        onClick={()=> dispatch({type: 'dark'})}
      >
        Change theme 🌒☀️
      </button>
    </nav>
  )
}

export default Navbar