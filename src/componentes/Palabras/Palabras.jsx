import React from "react";
import { useParams } from "react-router-dom";

const Palabras = () => {
    const { word } = useParams(); 
    console.log(word); 

    // Verifica si 'word' no es un número usando isNaN
    const isNotNumber = isNaN(+word);

    if (!isNotNumber) {
        return <p>La URL especifica un número, no una palabra válida.</p>;
    }

    return (
        <>
            <p>La palabra es: {word}</p>
        </>
    );
}

export default Palabras;
