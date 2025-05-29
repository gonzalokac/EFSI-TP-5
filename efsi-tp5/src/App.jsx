import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import MisCitas from './pages/MisCitas';
import NuevaReserva from './pages/NuevaReserva';
import './App.css'

function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas');
    return citasGuardadas ? JSON.parse(citasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  return (
    <Router>
      <Navbar />
      <div className="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mis-citas" element={<MisCitas citas={citas} />} />
          <Route path="/nueva-reserva" element={<NuevaReserva onAgregarCita={agregarCita} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
