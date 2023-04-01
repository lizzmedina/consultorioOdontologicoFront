
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import axios from 'axios';
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [odontoDetail, setOdontoDetail] = useState([{}]);
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  
  
  // useEffect(()=>{
  //   axios(url)
  //   .then(res => {
  //     console.log(res)
  //     setOdontoDetail(res.data)
  //   },[])
  //})
  // const addFav = () => {
  //   localStorage.setItem('odontologo', JSON.stringify(odontoDetail))
  // }
  // const showFav = () => {
  //   let odontoFav = localStorage.getItem('recipe')
  //   let parsedFav = JSON.parse(odontoFav)
  //   console.log(parsedFav)
  // }
  return (
    
    <div>
      <h1>Detail Dentist {odontoDetail.id }</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h3>{odontoDetail.name}</h3>
      <h4>{odontoDetail.email}</h4>
      <h4>{odontoDetail.phone}</h4>
      <h4>{odontoDetail.website}</h4>
    </div>
  )
}

export default Detail