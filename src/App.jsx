import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";
function App() {
  return (
    <section className="container text-center my-2">
      <h1>hola mundo</h1>
      <p className="px-5"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae eum
        aliquid voluptatum reiciendis tenetur expedita maxime dolorem ab, autem
        maiores quia modi iure amet qui corporis doloremque enim esse?
      </p>
      <Informacion/>
    </section>
  );
}

export default App;
