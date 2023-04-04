
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  let favoritosLocalStorage = JSON.parse(localStorage.getItem('favorites'));
  let favoritos = favoritosLocalStorage ? favoritosLocalStorage :[];
  return (
    <>
      <h1>Dentists Favs</h1>
        {/* este componente debe consumir los destacados del localStorage */}
      <div className="card-grid">
      {favoritos.map((dentist) => 
      <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>)} 
      {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
