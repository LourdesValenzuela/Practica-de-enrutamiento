import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bienvenida from '../Bienvenida/Bienvenida';
import Numeros from '../Numeros/Numeros';
import Palabras from '../Palabras/Palabras';
import PalabraConColor from '../PalabrasConColor/PalabrasConColor';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container"> 
      <Routes>
        <Route path="/home" element={<Bienvenida />} />
        <Route path="/numero/:number" element={<Numeros />} />
        <Route path="/palabra/:word" element={<Palabras />} />
        <Route path="/:word/:textColor/:backgroundColor" element={<PalabraConColor />} />
      </Routes>
    </div>
  );
}

export default App;
