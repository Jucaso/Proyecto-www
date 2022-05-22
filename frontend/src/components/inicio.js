import React, { useEffect, useState } from 'react';
import '../App.css';
import Card from './card';
import Carousel from 'react-bootstrap/Carousel';

export default function Inicio(){
    const [becas, setBecas] = useState([]);
    const [noticias,setNoticias] = useState([]);
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
        setNoticias(data_results);
    }) // Especifica qué se hará con la información traida de la API (data)
    .catch(console.log) // Excepción en caso de fallo
}

return ( 
    <div className="Cardsytle">
        <Carousel>
        {noticias.map(noticia =>(
                <Carousel.Item key={noticia.uri} interval={1500}>
                    <img
                    className="d-block w-100"   
                    src="https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png"
                    />
                    <Carousel.Caption>
                        <h3>{noticia.title}</h3>
                        <p>{noticia.abstract}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        <div className="container">
            
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