import React  from "react";


function Tarjeta(props){
    return(
    <div className="tarjeta">
        <div className="top">
            
            <img 
            className="circulo-img"
            src={props.img}
            alt="imagen" 
            />
            <h2 className="nombre">{props.nombre}</h2>
            <div className="bottom">
                <p className='info'>{props.telefono}</p>
                <p className='info'>{props.email}</p>
            </div>
        </div>
    </div>
    )
}

export default Tarjeta;