import Button from "./Button";
import React, { useState } from 'react';
const Searcher = ({ onBuscar }) => {
    const [busqueda, setBusqueda] = useState('');

    const handleBuscar = () => {
        onBuscar(busqueda);
    };

    return (
        <div className="search__container">
            <input className="search__container-input"
             type="text"
             placeholder="Ingrese el texto a buscar"
             value={busqueda}
             onChange={(e) => setBusqueda(e.target.value)} 

            />
            <Button className="search__container-button" onClick={handleBuscar}  >
                Buscar
            </Button>
        </div>
    );
}

export default Searcher;