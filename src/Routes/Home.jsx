import Card from '../Components/Card';
import { Link } from "react-router-dom";
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {odontologos} = useContextGlobal();
  
return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologos.length && odontologos.map(odon => (<Link key={odon.id} to={'/detail/'+ odon.id}> <Card data={odon}/> </Link>)) 
        } 
      </div>
    </main>
  )
}
export default Home;