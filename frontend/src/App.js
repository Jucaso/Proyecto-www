import './App.css';
import Inicio from './components/inicio'
import Listar from './components/listar'
import Editar from './components/editar'
import Crear from './components/crear'
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <ul className="nav navbar-nav">
              <li className="nav-item">
                  <Link className="nav-link" to={"/inicio"}>Inicio <span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item active">
                  <Link className="nav-link" to={"/listar"}>Gestionar becas</Link>
              </li>
          </ul>
      </nav>
      <div className="container">
       
        <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/listar" element={<Listar/>}/>
          <Route path="/crear" element={<Crear/>}/>
          <Route path="/editar/:id" element={<Editar/>}/>
        </Routes>
      </div>
      </Router>
      
    
   
    
    
    
  );
}

export default App;
