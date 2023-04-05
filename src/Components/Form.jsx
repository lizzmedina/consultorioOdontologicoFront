
import { useState } from "react";


const Form = () => {
  const [info, setInfo] = useState({
    nombre: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let emailTest = emailRegex.test(info.email);
      if (
        info.nombre.length >= 5 &&
        emailTest &&
        info.nombre[0] !== " "
      ) {
        setShow(true);
        setErr(false);
      } else {
        setErr(true);
      }
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input 
          type="text"
          value={info.nombre}
          onChange={(e) => setInfo({ ...info, nombre: e.target.value })}
          placeholder="ingresa tú nombre"
        />
        <input 
          type="email"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
          placeholder="ingresa tú correo"
        />
        <button type="submit" > Agregar </button>
      </form>
      {err && <p className="error-container">Por favor verifique su información nuevamente</p>}
      {show && <p>Gracias {info.nombre}, te contactaremos cuando antes vía mail</p>} 
    </div>
  );
};

export default Form;
