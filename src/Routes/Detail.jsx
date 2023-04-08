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
      <table>
      <thead> 
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Webside</th>
      </tr>
      </thead>     
      <tbody>
      <tr>
        <td>{odontologoId?.name}</td>
        <td>{odontologoId?.email}</td>
        <td>{odontologoId?.phone}</td>
        <td>{odontologoId?.website}</td>
      </tr>
      </tbody>      
      </table>
      </div> 
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Detail