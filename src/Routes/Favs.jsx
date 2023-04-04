
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Favs = () => {
  let favoritos = localStorage.getItem('favorites');
  let favoritosparsed = JSON.parse(favoritos);
    console.log(favoritosparsed);
    console.log(favoritosparsed[0].name);
  return (
    <>

      <h1>Dentists Favs</h1>
        {/* este componente debe consumir los destacados del localStorage */}
      {favoritosparsed.length && favoritosparsed.map(odont => (
      <Card key={odont.id} data={odont} />))} 
      {/* Deberan renderizar una Card por cada uno de ellos */}

    </>
  );
};

export default Favs;
