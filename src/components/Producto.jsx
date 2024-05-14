import Button from './Button';

const Producto = ({ producto, agregarAlCarro }) => {
    return (
        <div className="product">
            <img alt={producto.name} src={producto.img} />
            <h3>{producto.name}</h3>
            <p>{producto.price}</p>
            <Button className="product__button" 
            onClick={() => agregarAlCarro(producto)}>
                Agregar al carro
            </Button>
        </div>
    );
}

export default Producto;
