import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";

import {useCookies} from 'react-cookie';


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
    const[token] = useCookies(['mytoken']);

    useEffect(() => {
        if(token['mytoken']){
            loadInfo();
        }
        else{
            navigate('/');
        }
    }, []);

    async function loadInfo(){
        try {
            const request = await fetch("http://127.0.0.1:8000/beca/"+id+"/",{
                headers: {'Authorization': "Token " + token['mytoken']}
            });
            const json = await request.json();
            setNombre(json.nombre);
            setCategoria(json.categoria);
            setFinanciacion(json.financiacion);
            setPais(json.pais);
            setUniversidad(json.universidad);
            setRequerimientos(json.requerimientos);
            //console.log(json);
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
                'Authorization': "Token " + token['mytoken'],

                //'X-CSRFToken':csrftoken,
            },
            body:JSON.stringify(dataToSend)
        }) // Solicitud de datos a la API
        .then(response => response.json()) // Solicita la informaci??n en formato json
        .then((data)=>{
            console.log("Data updated succesfully:",data);
            navigate('/listar');
            //this.props.history.push('/');           
        }) // Especifica qu?? se har?? con la informaci??n traida de la API (data)
        .catch(console.log)
    }
    return ( <div className="card scroll2 mt-5">
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
              <label htmlFor="" className="form-label">Categor??a</label>
              <input type="text" name="correo" onChange={handleChangeCategoria} value={categoria} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Categor??a de la beca</small>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Financiaci??n</label>
              <input type="text" name="correo" onChange={handleChangeFinanciacion} value={financiacion} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Financiaci??n de la beca</small>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Pa??s</label>
              <input type="text" name="correo" onChange={handleChangePais} value={pais} id="correo" className="form-control" placeholder="" aria-describedby="helpId"/>
              <small id="helpId" className="text-muted">Pa??s de la beca</small>
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
 