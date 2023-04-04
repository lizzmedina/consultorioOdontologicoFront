import { useState } from 'react';

const Card = ({data}) => {
  
  const [odontologo, setOdontologo] = useState([]);
  
  let favoritos = localStorage.getItem('favorites');

  const addFav = (data)=>{
    if (favoritos) {
      let favoritosparsed = JSON.parse(favoritos);
      favoritos = [...favoritosparsed, odontologo ];
    }else {
      favoritos = [odontologo];
    }
    if(!favoritos.find(e => e.id == data.id )){
      favoritos.push(data);
    }

    localStorage.setItem('favorites', JSON.stringify(favoritos));
    
    // Aqui iria la logica para agregar la Card en el localStorage
  }
return (
    <div >
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          <div className="card" >
            <img src='./images/doctor.jpg' alt="medico-avatar" className="img-card" />
            <h3>{data.name}</h3>
            <h4>{data.username}</h4>
            <h5>{data.id}</h5>
          </div>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button
          id={data.id}
          onClick={(e)=> {addFav(data)}}
          className="favButton"
        >
          Add fav ⭐
        </button>
        
    </div>
  );
};

export default Card;

