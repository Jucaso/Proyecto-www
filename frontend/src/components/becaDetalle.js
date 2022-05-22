import { Card, Row, Col, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";





export default function BecaDetalle(){
    const {id} = useParams();
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
    
    return (
        <Card>
            <Card.Header>Información de la beca</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/12152234/universidad-yale-1.jpg"/>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                    Categoría: {categoria}                                     
                    </Card.Text>    
                    <Card.Text>
                    Finanicación: {financiacion}                                     
                    </Card.Text>  
                    <Card.Text>
                    País: {pais}                                     
                    </Card.Text>  
                    <Card.Text>
                    Universidad: {universidad}                                      
                    </Card.Text>  
                    <Card.Text>
                    Requerimientos: {requerimientos}                                     
                    </Card.Text>  
                </Card.Body>
        </Card>
    )
}