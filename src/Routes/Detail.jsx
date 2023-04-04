
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
//import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [odontologo, setOdontologo] = useState([]);
  let favoritos = localStorage.getItem('favorites');

  const navigate = useNavigate();
  const { id } = useParams();

  const getOdontologo = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    //console.log(data);
    setOdontologo(data)
  }
  useEffect(()=>{
    getOdontologo()
  }, [])

  const addFav = (data)=>{
    if (favoritos) {
      let favoritosparsed = JSON.parse(favoritos);
      favoritos = [...favoritosparsed, odontologo ];
    }else {
      favoritos = [odontologo];
    }
    // if(!favoritos.find(e => e.id == data.id )){
    //   favoritos.push(data);
    // }

    localStorage.setItem('favorites', JSON.stringify(favoritos));
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  return (

    <div>
      <h1>Detail Dentist {id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

     <div className='detailCard'>
        <h3>{odontologo.name}</h3>
        <h4>{odontologo.email}</h4>
        <h4>{odontologo.phone}</h4>
        <h4>{odontologo.website}</h4>
      </div> 
      <button
          onClick= {addFav}
          className="favButton"
        >
          Add fav ⭐
        </button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Detail