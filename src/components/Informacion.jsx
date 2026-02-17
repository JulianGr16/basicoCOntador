import Contador from "./Contador";
import Teoria from "./Teoria";

const Informacion = () => {
const anio = new Date().getFullYear()
  return (
    <section>
      <h2>¿Ques es react?</h2>
      <p>
        React es una biblioteca de JavaScript de código abierto, desarrollada
        por Facebook, utilizada para construir interfaces de usuario (UI)
        interactivas y escalables, principalmente para aplicaciones web y
        móvil
      </p>
      <Teoria comision='101i' anioActual={anio}/>
      <Contador/>
    </section>
  );
};

export default Informacion;
