import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import card from "./card.css"
import '../App.css';

import {Carousel, Col, Row, Card, Spinner } from 'react-bootstrap';

export default function Inicio(){
    const [becas, setBecas] = useState([]);
    const [noticias,setNoticias] = useState([]);
    const [loading, setLoading] = useState(true)
    //loadData();
    useEffect(() => {
        loadData();
        loadData2();
    }, []);

function loadData(){
    //console.log("Imprime datos");
    fetch("http://127.0.0.1:8000/beca/" ) // Solicitud de datos a la API
    .then(response => response.json()) // Solicita la información en formato json
    .then((data)=>{
        //console.log(data);
        setBecas(data);
    }) // Especifica qué se hará con la información traida de la API (data)
    .catch(console.log) // Excepción en caso de fallo
}
function loadData2(){
    //console.log("Imprime datos");
    fetch("http://api.nytimes.com/svc/topstories/v2/world.json?api-key=MFf8jPFwlAUieJ11eom6mLDIDn1n83JK") // Solicitud de datos a la API
    .then(response => response.json()) // Solicita la información en formato json
    .then((data)=>{
        let data_results = data.results;
        let data_media = data.results[0][8];
       // console.log(data);
        //console.log(data_media);
        console.log(data_results);
        setThree(data_results);
        setLoading(false)
    }) // Especifica qué se hará con la información traida de la API (data)
    .catch(console.log) // Excepción en caso de fallo
}

function setThree(news){
    var temp = []
    for(let i=0; i<28; i++){
        var aux = news[i];
        //console.log("aux:",aux);
        temp.push(aux);
    }
    //console.log(temp);
    setNoticias(temp);
}


return ( 
    <div className="Cardsytle">
        {loading ? 
        
        (<div className="d-flex justify-content-center">
            <Spinner animation="border" />
        </div>)
        
        :
        (
            <Card>
                <Card.Header>Becas populares</Card.Header>
                <Card.Body>
                    
                    <div className="container">          
                        <div className="row gy-2">                              
                            <Row xs={1} md={3} className="g-4">
                                {becas.map((beca) => (                   
                                <Col>
                                <Card className="cardHeight">
                                    <Card.Img variant="top" src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/12152234/universidad-yale-1.jpg" />
                                    <Card.Body>
                                    <Card.Title>{beca.nombre}</Card.Title>
                                    <Card.Text>
                                        {beca.categoria}
                                    </Card.Text>
                                    <Link className="btn btn-primary" variant="primary" to={"/becaDetalle/"+beca.id}>Conocer más</Link>
                                    </Card.Body>
                                </Card>
                                </Col>               
                            ))}
                            </Row>                             
                        </div>  
                    </div>
            </Card.Body>
            <Card.Footer>
                <Carousel>
                    {noticias.map(noticia =>(
                            <Carousel.Item key={noticia.uri} interval={1500}>
                                <img
                                className="d-block w-100"   
                                src={noticia.multimedia[0].url}
                                />
                                <Carousel.Caption>
                                    <h3>{noticia.title}</h3>
                                    <p>{noticia.abstract}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            ))}
                </Carousel>
            </Card.Footer>
        </Card>
        )}
        </div>
        
    
    
);
}