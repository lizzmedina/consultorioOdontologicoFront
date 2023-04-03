import { Link } from "react-router-dom";

const Card = ({data}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    localStorage.getItem('ondontologo.id')
  }

  return (
    <div >
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* {odontologo.length && odontologo.map((odon, id = odon.id)=>( */}
          <div className="card" >
            <img src='./images/doctor.jpg' alt="medico-avatar" className="img-card" />
            <h3>{data.name}</h3>
            <h4>{data.username}</h4>
            <h5>{data.id}</h5>
            <hr />
          </div>
        {/* ))} */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button 
          onClick={addFav} 
          className="favButton"
        >
          Add fav ⭐
        </button>
    </div>
  );
};

export default Card;
