import { useState } from 'react';

const useProductoSelecciondo = (productos) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const seleccionarProducto = (id) => {
    const producto = productos.find((p) => p.id === parseInt(id));
    setProductoSeleccionado(producto);
  };

  return [productoSeleccionado, seleccionarProducto];
};

export default useProductoSelecciondo;