
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <hr />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favoritos" element={<Favs/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="*" element={<Navigate to= "/notFound"/>} /> 
            {/* REVISAR LA RUTA DEL NOTFOUND PORQUE NO FUNCIONA CORRECTAMENTE */}
          </Routes>
          <Footer/>
      </div>
      
  );
}

export default App;
