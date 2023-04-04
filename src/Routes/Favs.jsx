
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Favs = () => {
  let favoritos = localStorage.getItem('favorites');
  let favoritosparsed = JSON.parse(favoritos);
    console.log(favoritosparsed);
  return (
    <>

      <h1>Dentists Favs</h1>
        {/* este componente debe consumir los destacados del localStorage */}
      <div className="card-grid">
      {favoritosparsed.map((dentist, id) => 
      <Card key={dentist.id} data={dentist} id={dentist.id} />)} 
      {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
