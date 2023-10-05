import { Link, Outlet } from "react-router-dom";
import './Layout.css'
const Layout = () => {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/ejercicio-1" className="nav-link active" aria-current="page">Componente de Saludo</Link>
          </li>
          <li className="nav-item">
            <Link to="/ejercicio-2" className="nav-link">Lista de Elementos</Link>
          </li>
          <li className="nav-item">
            <Link to="/ejercicio-3" className="nav-link">Contador</Link>
          </li>
          <li className="nav-item">
            <Link to="/ejercicio-4" className="nav-link">Formulario de Contacto</Link>
          </li>
          <li className="nav-item">
            <Link to="/ejercicio-5" className="nav-link">Lista de Tareas</Link>
          </li>
          <li className="nav-item">
            <Link to="/ejercicio-6" className="nav-link">Temporizador</Link>
          </li>
          <li className="nav-item">
            <Link to="/ejercicio-7" className="nav-link">Calculadora</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
