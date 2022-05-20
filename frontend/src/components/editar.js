import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";


export default function Editar(){
    const {id} = useParams();
    let navigate = useNavigate();
    //console.log("id:",id);
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [financiacion, setFinanciacion] = useState("");
    const [pais, setPais] = useState("");
    const [universidad, setUniversidad] = useState("");
    const [requerimientos, setRequerimientos] = useState("");

    useEffect(() => {
        loadInfo();
    }, []);

    async function loadInfo(){
        try {
            const request = await fetch("http://127.0.0.1:8000/beca/"+id+"/");
            const json = await request.json();
            setNombre(json.nombre);
            setCategoria(json.categoria);
            setFinanciacion(json.financiacion);
            setPais(json.pais);
            setUniversidad(json.universidad);
            setRequerimientos(json.requerimientos);
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }
    // Handlers
    function handleChangeName(e) {  
        setNombre(e.target.value);      
    }

    function handleChangeCategoria(e) {  
        setCategoria(e.target.value);
    }

    function handleChangeFinanciacion(e) {  
        setFinanciacion(e.target.value);
    }

    function handleChangePais(e) {  
        setPais(e.target.value);
    }

    function handleChangeUniversidad(e) {  
        setUniversidad(e.target.value);
    }

    function handleChangeRequerimientos(e) {  
        setRequerimientos(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        //console.log("Formulario enviado");
        //console.log(this.state.nombre);
        //console.log(this.state.correo);
        var dataToSend = {nombre: nombre,
                         categoria: categoria, 
                         financiacion: financiacion,
                         pais: pais, 
                         universidad: universidad, 
                         requerimientos: requerimientos}
        fetch("http://127.0.0.1:8000/beca/"+id+"/",{
            method: "PUT",
            headers: {
                //'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'X-CSRFToken':csrftoken,
            },
            body:JSON.stringify(dataToSend)
        }) // Solicitud de datos a la API
        .then(response => response.json()) // Solicita la información en formato json
        .then((data)=>{
            console.log("Data updated succesfully:",data);
            navigate('/listar');
            //this.props.history.push('/');           
        }) // Especifica qué se hará con la información traida de la API (data)
        .catch(console.log)
    }
    return ( <div className="card">
    <div className="card-header">
        Editar beca
    </div>
    <div className="card-body">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Nombre</label>
              <input type="text" name="nombre" onChange={handleChangeName} value={nombre} id="nombre" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Nombre de la beca</small>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Categoría</label>
              <input type="text" name="correo" onChange={handleChangeCategoria} value={categoria} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Categoría de la beca</small>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Financiación</label>
              <input type="text" name="correo" onChange={handleChangeFinanciacion} value={financiacion} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Financiación de la beca</small>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">País</label>
              <input type="text" name="correo" onChange={handleChangePais} value={pais} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">País de la beca</small>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Universidad</label>
              <input type="text" name="correo" onChange={handleChangeUniversidad} value={universidad} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Universidad de la beca</small>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Requerimientos</label>
              <input type="text" name="correo" onChange={handleChangeRequerimientos} value={requerimientos} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Requerimientos de la beca</small>
            </div>

            <div className="btn-group" role="group" aria-label="">
                <button type="submit" className="btn btn-success">Editar beca</button>
                <Link to={"/listar"} className="btn btn-primary">Cancelar</Link>
            </div>
        </form>
    </div>
    <div className="card-footer text-muted">
        @Copyright Jucaso 2022
    </div>
</div>  );
    
}
 