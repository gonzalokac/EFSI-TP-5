import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <h2>Citas Vet 🐾</h2>
      <nav className="nav-links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/mis-citas">Mis Citas</NavLink>
        <NavLink to="/nueva-reserva">Nueva Reserva</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
