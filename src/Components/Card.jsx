import { Link } from "react-router-dom";

const Card = ({name, username, id, handlerDeleteFav=null, handlerAddOdonto=null}) => {

      
return (
    <div className="card">
      <Link to={`/detail/${id}`}>
      <img src='./images/doctor.jpg' alt="medico-avatar" className="img-card" />
      <h3>{name}</h3>
      <h3>{username}</h3>
      <h3>{id}</h3>
      </Link>
      {
       handlerDeleteFav ? <button onClick= {() => handlerDeleteFav(id) } className="favButton">
        Delete Fav⭐
      </button>
      :
      <button onClick= {()=> handlerAddOdonto({id, username, name})} className="favButton">
        Add fav ⭐
      </button>
      }
      
    </div>
  );
};

export default Card;

