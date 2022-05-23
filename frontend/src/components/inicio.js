import React, { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';
import { Link } from "react-router-dom";
import "./css/card.css"
import '../App.css';

import {Carousel, Col, Row, Card, Spinner } from 'react-bootstrap';

export default function Inicio(){
    const [becas, setBecas] = useState([]);
    const [noticias,setNoticias] = useState([]);
    const [loading, setLoading] = useState(true)
    const[token] = useCookies(['mytoken']);

    //loadData();
    useEffect(() => {
        loadData();
        loadData2();
    }, []);

function loadData(){
    //console.log("Imprime datos");
    //console.log("token:",token);
    fetch("http://127.0.0.1:8000/beca/",{
        headers: {'Authorization': "Token " + token['mytoken']}
    } ) // Solicitud de datos a la API
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
       // console.log(data);
        //console.log(data_media);
        //console.log(data_results);
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
        <div className='container'>
            <div className='row'>
                <div className='col mt-1'>
            <Card className="cardbackgroundcolor2">
                <Card.Header className=" cardbackgroundcolor text-white">Becas populares</Card.Header>
                <Card.Body>
                        <div className="row gy-2 scroll">                              
                            <Row xs={1} md={3} className="g-4">
                                {becas.map((beca) => (                   
                                <Col key={beca.id}>
                                <Card className="cardHeight text-center text-white cardbackgroundcolor becascard" >
                                    <Card.Img variant="top" src="https://www.univalle.edu.co/media/k2/items/cache/f5b95525832f3712e665bb57dba370d3_M.jpg" />
                                    <Card.Body className="d-flex flex-column">
                                    <Card.Title variant="dark" className="mb-auto mt-auto">{beca.nombre}</Card.Title>
                                    <Card.Text className="mt-auto d-inline-block">
                                        {beca.categoria}
                                    </Card.Text>
                                    <Link className="btn btn-dark mt-auto" variant="primary" to={"/becaDetalle/"+beca.id}>Conocer más</Link>
                                    </Card.Body>
                                </Card>
                                </Col>               
                            ))}
                            </Row>                             
                        </div>  
            </Card.Body>
        </Card>
        </div>
        <div className='col-4 mt-1'>
        <Card className='cardbackgroundcolor text-white text-center'>
        <Card.Header>Sección de noticias</Card.Header>
            <Carousel className='CarouselX'>
            {noticias.map(noticia =>(
                    <Carousel.Item className='ItemX' key={noticia.uri} interval={1800}>
                        <a href={noticia.url} target="_blank">
                        <img
                        className="d-block w-100 h-50"   
                        src={noticia.multimedia[0].url}
                        /></a>
                        <Carousel.Caption >
                            <h3 className="fw-bolder fs-5">{noticia.title}</h3>
                            <p className="badge bg-dark text-wrap">{noticia.abstract}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
        </Carousel>
        <Card.Footer className='text-muted fst-italic'>
            Fuente: New York Times.
        </Card.Footer>
        </Card>
        </div>
        </div>
        </div>
        )}
        </div>
        
    
    
);
}