import React from 'react';
import './card.css';
function Card(props){

    return(
        <div className="card text-center cardHeight">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Categoria: {props.cat}</li>
                    <li className="list-group-item">Financiación: {props.fin}%</li>
                    <li className="list-group-item">Universidad: {props.uni} </li>
                    </ul>
            </div>
            <div className="card-footer text-muted">
               <a href="#" className="btn btn-outline-primary">Ver detalles</a>
            </div>
        </div>
    );

}
export default Card