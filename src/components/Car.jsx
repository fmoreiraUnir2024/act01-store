import BubbleAlert from './BubbleAlert';
import DetailsCar from './DetailsCar';

const Car = ({ carro, esCarroVisible, mostrarCarro }) => {
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
    return (
        <div>
            <span className="bubble">
                {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
            </span>
            <button
                onClick={mostrarCarro}
                className="carro">Carro
            </button>
            {esCarroVisible ? <DetailsCar carro={carro} /> : null}
        </div>
    );
}

export default Car;
