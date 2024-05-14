import Producto from './Producto'
const Productos =({productos, agregarAlCarro}) =>{
    
    return (
        <div className="productos">
                {productos.map(producto=>
                    <Producto 
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    ></Producto>
                    )}
            </div>
    
    )
    
    }
    
    export default Productos;
    