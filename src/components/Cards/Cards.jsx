import React from 'react'
// import abrigos from '../assets/img/abrigos'

const Cards = (props) => {

    const {imagen,titulo,descripcion,precio} = props;

  return (
    <div className="card" style={{width:'18rem'}}>
        <img src={imagen} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">{precio}</p>
            <button className="btn btn-primary">Añadir al Carrito</button>
        </div>
    </div>
  )
}

export default Cards;