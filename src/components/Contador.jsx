import { useState } from "react";
const Contador = () => {
    const [contador, setContador] = useState(1)

    const sumar = ()=>{
        setContador(contador + 1)
    }


    return (
        <section className="my-2 text-center">
            <h2 className="fw-bold">contador</h2>
            <h4>{contador}</h4>
            <button className="btn btn-primary me-1" onClick={sumar}>+1</button>
            <button className="btn btn-danger" onClick={()=> setContador(contador - 1)}>-1</button>
        </section>
    );
};

export default Contador;