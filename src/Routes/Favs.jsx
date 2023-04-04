import Card from '../Components/Card';

const Favs = () => {
  let favoritosLocalStorage = JSON.parse(localStorage.getItem('favorites'));
  let favoritos = favoritosLocalStorage ? favoritosLocalStorage :[];
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favoritos.map((dentist) => 
      <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>)} 
      </div>
    </>
  );
};

export default Favs;
