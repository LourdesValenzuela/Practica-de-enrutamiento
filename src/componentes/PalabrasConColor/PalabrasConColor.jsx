import React from 'react';
import { useParams } from 'react-router-dom';

const PalabraConColor = () => {
  const { word, textColor, backgroundColor } = useParams();

  const estiloContenedor = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '10vh', // Ocupa toda la pantalla verticalmente
    backgroundColor: backgroundColor,
    width: '100vw', // Ocupa toda la pantalla horizontalmente
    padding: '0', // Sin relleno para que el fondo ocupe toda la pantalla horizontalmente
    margin: '0', // Sin margen para que el fondo comience desde el borde izquierdo
  };

  const estiloTexto = {
    color: textColor,
    margin: '0 100px', // Margen de 100px a la derecha e izquierda del texto
  };

  return (
    <div style={estiloContenedor}>
      <div style={estiloTexto}>
        <p>La palabra es: {word}</p>
      </div>
    </div>
  );
}

export default PalabraConColor;

