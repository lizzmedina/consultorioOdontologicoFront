import {  useState } from "react";
import { Link } from "react-router-dom";

const Card = ({name, username, id}) => {
    const addFav = ()=>{
    let favoritos = JSON.parse(localStorage.getItem('favorites'));
    if (favoritos) {
      let odontoNuevo = favoritos.find(favo => favo.id === id )
      let nuevosFav = []
      if (odontoNuevo) {
          nuevosFav = favoritos.filter(fav => fav.id !== id)
      }else {
        nuevosFav = [...favoritos, {name, username, id} ];
      }
      localStorage.setItem('favorites', JSON.stringify(nuevosFav))
    }else {
      localStorage.setItem('favorites', JSON.stringify([{name, username, id}]));
    }
  }
  
return (
    <div className="card">
      <Link to={`/detail/${id}`}>
      <img src='./images/doctor.jpg' alt="medico-avatar" className="img-card" />
            <h3>{name}</h3>
            <h4>{username}</h4>
            <h5>{id}</h5>
      </Link>
      <button
          onClick= {addFav}
          className="favButton"
        >
          Add fav ⭐
        </button>
    </div>
  );
};

export default Card;

