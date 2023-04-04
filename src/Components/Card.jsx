import { useState } from 'react';

const Card = ({data}) => {
  
  
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
      
        
    </div>
  );
};

export default Card;

