import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Card from './card';

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

return ( 
    <div className="Cardsytle">
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row gy-2">
                {
                    becas.map(beca =>(
                        <div className="col-md-4" key={beca.id}>
                        <Card title={beca.nombre} cat={beca.categoria} fin={beca.financiacion} uni={beca.universidad}/>
                        </div>
                    ))
                }
            </div>  
    </div>
 </div>
    
);
}