import Button from "./Button";
import React, { useState } from 'react';
const Searcher = ({ onBuscar }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleBuscar = () => {
        onBuscar(busqueda);
    };

    return (
        <div className="search-container">
            <input className="search-container__input"
             type="text"
             placeholder="Ingrese el texto a buscar"
             value={busqueda}
             onChange={(e) => setBusqueda(e.target.value)} 

            />
            <Button className="search-container__button" onClick={handleBuscar}  >
                Buscar
            </Button>
        </div>
    );
}

export default Searcher;