import Producto from './Producto'
const Productos =({productos, agregarAlCarro, seleccionarProducto }) =>{
    
    return (
        <div className="productos">
                {productos.map(producto=>
                    <Producto 
                    seleccionarProducto={() => seleccionarProducto(producto.id)}
                        agregarAlCarro={agregarAlCarro}
                        key={producto.id}
                        producto={producto}
                    ></Producto>
                    )}
            </div>
    
    )
    
    }
    
    export default Productos;
    