import { useParams, useNavigate } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Detail = () => {

  const {odontologos} = useContextGlobal();
  const navigate = useNavigate();
  const { id } = useParams();

  const getIdOdonto =() => {
  return odontologos.find(odontologo=> odontologo.id === parseInt(id))
  }
  const odontologoId = getIdOdonto();

  return (
    <div>
      <h1>Detail Dentist {id}</h1>
      <div className='detailCard'>
        <h3>{odontologoId.name}</h3>
        <h4>{odontologoId.email}</h4>
        <h4>{odontologoId.phone}</h4>
        <h4>{odontologoId.website}</h4>
      </div> 
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Detail