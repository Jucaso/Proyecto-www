import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function Inicio(){
    const [becas, setBecas] = useState([]);
    //loadData();
    useEffect(() => {
        loadData();
    }, []);

    

    function loadData(){
        //console.log("Imprime datos");
        fetch("http://127.0.0.1:8000/beca/" ) // Solicitud de datos a la API
        .then(response => response.json()) // Solicita la información en formato json
        .then((data)=>{
            console.log(data);
            setBecas(data);
        }) // Especifica qué se hará con la información traida de la API (data)
        .catch(console.log) // Excepción en caso de fallo
    }

    function deleteItem(id) {
        console.log(id);
        fetch(`http://127.0.0.1:8000/beca/${id}/`, {
          method:'DELETE',
          headers:{
            'Content-type':'application/json',
            //'X-CSRFToken':csrftoken,
          },
        }).then(() =>{  
          loadData();
        })
    }

    return (
        <div className="card bg-dark">
                <div className="card-header">
                    <Link className="btn btn-success" to={"/crear"}>Crear beca</Link>
                </div>
                <div className="card-body">
                <table className="table">
            <thead className='text-white'>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Financiación</th>
                    <th>País</th>
                    <th>Universidad</th>
                    <th>Requerimientos</th> 
                </tr>
            </thead>
            <tbody className='text-white'>
                {becas.map(
                    (beca) => (
                        <tr key={beca.id}>
                        <td>{beca.id}</td>
                        <td>{beca.nombre}</td>
                        <td>{beca.categoria}</td>
                        <td>{beca.financiacion}</td>
                        <td>{beca.pais}</td>
                        <td>{beca.universidad}</td>
                        <td>{beca.requerimientos}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="">
                                <Link className="btn btn-warning" to={"/editar/"+beca.id}>Editar</Link>
                                <button type="button" className="btn btn-danger" onClick={()=>deleteItem(beca.id)}>Borrar</button>
                            </div>
                        </td>
                        </tr> 
                    )

                )}
                
            </tbody>
        </table>
                </div>
                <div className="card-footer text-muted">
                    @Copyright 2022
                </div>
            </div>
    )
}