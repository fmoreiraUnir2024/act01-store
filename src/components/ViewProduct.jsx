import Button from './Button';
import { Link } from 'react-router-dom';
const ViewProduct = ({ producto }) => {
    if (!producto) {
        return <div>No se ha seleccionado un producto</div>;
      }
    return (

        <div className='ViewProduct' >
            <div className='ViewProduct__car'>
            <img alt={producto.name} src={producto.img} />
            <h3>{producto.name}</h3>
            <p>{producto.description}</p>
            <p><b>Precio:</b>  {producto.price}  
            <br></br> <b>Año:</b> {producto.anio} <b>Ubicación:</b>    {producto.ubicacion}</p>        
             <Link className="ViewProduct__button" to="/layout">Regresar</Link> 
            </div>
         
        </div>
    );
}

export default ViewProduct;
