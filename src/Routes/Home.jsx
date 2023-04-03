import Card from '../Components/Card';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [odontologos, setOdontologo] = useState([]);

  const getOdontologos = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
      setOdontologo(data)
  }

  useEffect(()=> {  
      getOdontologos()
    }, [])


  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {odontologos.length && odontologos.map(odon => (<Link key={odon.id} to={'/detail/'+ odon.id}> <Card data={odon}/> </Link>)) 
        }
      </div>
    </main>
  )
}

export default Home;