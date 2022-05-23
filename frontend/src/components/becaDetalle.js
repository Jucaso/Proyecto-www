import { Card, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';
import "./css/card.css"



export default function BecaDetalle(){
    const {id} = useParams();
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [financiacion, setFinanciacion] = useState("");
    const [pais, setPais] = useState("");
    const [universidad, setUniversidad] = useState("");
    const [requerimientos, setRequerimientos] = useState("");
    const[token, setToken] = useCookies(['mytoken']);

    useEffect(() => {
        loadInfo();
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
    
    return (
    <div className='container d-flex justify-content-center'>
        <Card className="text-white mt-1 cardbackgroundcolor">
            <Card.Header className='cardbackgroundcolor text-center'>Información de la beca</Card.Header>
            <div className="row g-0">
                <div className="col-md-4 mt-4">
                <Card.Img className='cardwidth'  src="https://www.univalle.edu.co/media/k2/items/cache/f5b95525832f3712e665bb57dba370d3_M.jpg"/>
                </div>
                    <div className="col-md-8">
                    <Card.Body>
                        <ListGroup className="list-group-flush bg-transparent">
                        <ListGroupItem className='bg-transparent text-white fs-4 fw-bolder'>{nombre}</ListGroupItem>
                        <ListGroupItem className='bg-transparent text-white'>Categoría: {categoria} </ListGroupItem>
                        <ListGroupItem className='bg-transparent text-white'>Finanicación: {financiacion}%</ListGroupItem>
                        <ListGroupItem className='bg-transparent text-white'>País: {pais}</ListGroupItem>
                        <ListGroupItem className='bg-transparent text-white'>Universidad: {universidad}</ListGroupItem>
                        <ListGroupItem className='bg-transparent text-white'>Requerimientos: {requerimientos}</ListGroupItem>
                    </ListGroup>   
                    </Card.Body>
                    </div>
            </div>
        </Card>
    </div>
    )
}