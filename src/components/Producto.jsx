import Button from './Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const Producto = ({ producto, agregarAlCarro, seleccionarProducto  }) => {
    


    return (
        <div className="product">
            <img alt={producto.name} src={producto.img} />
            <h3>{producto.name}</h3>
            <p>{producto.description}</p>
            <p><b>Precio:</b>  {producto.price}  
            <br></br> <b>Año:</b> {producto.anio} <b>Ubicación:</b>    {producto.ubicacion}</p>
            <div className='product__group-button'>
            <Link className="product__button"  onClick={() => seleccionarProducto()} to="/ViewProduct"  >
                Ver
            </Link>
            <Button className="product__button" 
            onClick={() => agregarAlCarro(producto)}>
                Agregar al carro
            </Button>
            </div>
           
        </div>
    );
}

export default Producto;
