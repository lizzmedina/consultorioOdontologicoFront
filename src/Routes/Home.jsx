import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const {odontologos} = useContextGlobal();
return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologos.map(odon => (<Card key={odon.id} name={odon.name} username={odon.username} id={odon.id}/> )) 
        } 
      </div>
    </main>
  )
}
export default Home;