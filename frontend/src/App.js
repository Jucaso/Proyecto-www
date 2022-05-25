import './App.css';
import Inicio from './components/inicio';
import Listar from './components/listar';
import Editar from './components/editar';
import Crear from './components/crear';
import BecaDetalle from './components/becaDetalle';
import Login from './components/login';
import Register from './components/register';
import { useCookies, removeCookie } from 'react-cookie';
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from 'react';


function App() {
  //let navigate = useNavigate();
  const[token, setToken, removeToken] = useCookies(['mytoken'])
  const[logged, setLogged] = useState(false);

  useEffect(() => {
    if(token['mytoken']){
      console.log("entra")
      setLogged(true);
    }

  })


  const logout = () => {
    removeToken(['mytoken']); 
  }
  return (

      (token['mytoken'] ? (  
        <Router>    
        <nav className="navbar navbar-expand navbar-custom" >
        <ul className="nav navbar-nav mx-auto">
            <li className="nav-item">
                <Link className="nav-link text-white" to={"/inicio"}>Inicio <span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-white" to={"/listar"}>Gestionar becas</Link>
            </li>
            </ul>
            <ul className="nav navbar-nav">
            <li className="nav-item active">
                <a name="" id="" className="btn btn-dark" href="/" role="button" onClick={logout}>Cerrar sesión</a>
            </li>
        </ul>
      </nav>

      <div className="container">      
          <Routes>
          <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/listar" element={<Listar/>}/>
            <Route path="/crear" element={<Crear/>}/>
            <Route path="/editar/:id" element={<Editar/>}/>
            <Route path="/becaDetalle/:id" element={<BecaDetalle/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </div>
        </Router> 
           
      ) : (  
        <Router>     
          <div className="container">      
          <Routes>
          <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/listar" element={<Listar/>}/>
            <Route path="/crear" element={<Crear/>}/>
            <Route path="/editar/:id" element={<Editar/>}/>
            <Route path="/becaDetalle/:id" element={<BecaDetalle/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </div> 
        </Router> 
      ))
      
      
    
      
    
   
    
    
    
  );
}

export default App;

