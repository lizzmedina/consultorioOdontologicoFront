import Card from '../Components/Card';
import { useContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const {odontologos} = useContextGlobal();

  const handlerAddOdonto = (odontologo) => {
    let favoritos = JSON.parse(localStorage.getItem('favorites'));
    if (favoritos) {
    if (favoritos.every((odontologofav)=> odontologofav.id !== odontologo.id)) {
      const nuevosFav = [...favoritos, odontologo ];
    localStorage.setItem('favorites', JSON.stringify(nuevosFav));
    }
    } else {
      localStorage.setItem('favorites', JSON.stringify([odontologo]));
    }    
  }

return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {odontologos.map(odon => (<Card handlerAddOdonto={handlerAddOdonto} key={odon.id} name={odon.name} username={odon.username} id={odon.id}/> )) 
        } 
      </div>
    </main>
  )
}
export default Home;