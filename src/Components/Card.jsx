const Card = ({data}) => {
  
  
return (
    <div >
          <div className="card" >
            <img src='./images/doctor.jpg' alt="medico-avatar" className="img-card" />
            <h3>{data.name}</h3>
            <h4>{data.username}</h4>
            <h5>{data.id}</h5>
          </div>
    </div>
  );
};

export default Card;

