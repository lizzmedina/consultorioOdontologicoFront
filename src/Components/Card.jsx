import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Card = () => {

  const [odontologo, setOdontologo] = useState([{}]);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    localStorage.getItem('ondontologo.id')
  }

  const getOdontologo = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
      setOdontologo(data)
    
  }
    useEffect(()=> {  
      getOdontologo()
    }, [])

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {odontologo.map((odon, id = odon.id)=>(
          <div key={id}>
            <img src='./images/doctor.jpg' alt="medico-avatar" />
            <Link to="detail"><h3>{odon.name}</h3></Link>
            <h4>{odon.username}</h4>
            <h5>{odon.id}</h5>
          </div>
        ))}
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
