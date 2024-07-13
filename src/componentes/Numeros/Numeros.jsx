import React from "react";
import { useParams } from "react-router-dom";

const Numeros = () => {
    const parametros = useParams();
    const numero = parametros.number;

    // Verificar si el parámetro es un número válido
    if (isNaN(numero)) {
        return <p>El parámetro no es un número válido.</p>;
    }

    return (
        <>
            <p>El número es: {numero}</p>
        </>
    );
}

export default Numeros;
