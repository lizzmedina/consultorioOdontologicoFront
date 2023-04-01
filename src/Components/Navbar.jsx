import {Link} from 'react-router-dom';
import { useReducer } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
  const initialState = {theme: "light", data: []};
  const reducer = (state, action) => {
    switch (action.type) {
      case 'dark':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
      default:
        return {theme: initialState.theme};
    }
  }
const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to="/"> DH Odonto </Link>
        <Link to="/"> Home </Link> 
        <Link to="/contact"> Contact </Link>
        <Link to="/favoritos"> Favoritos </Link>
        <p>{state.theme}</p>
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