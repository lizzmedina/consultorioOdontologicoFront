
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const [odontologo, setOdontologo] = useState([]);
  let favoritos = localStorage.getItem('favorites');

  const navigate = useNavigate();
  const { id } = useParams();

  const getOdontologo = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
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
    localStorage.setItem('favorites', JSON.stringify(favoritos));
  }
  return (

    <div>
      <h1>Detail Dentist {id}</h1>
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