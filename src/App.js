import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Title from './components/Title';
import Productos from './components/Productos';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [state, setState] = useState({
    productos: [
      {
        name: 'Toyota Corolla',
        price: 15000,
        img: 'https://res.cloudinary.com/durxpegdm/image/upload/v1715664206/PORTAFOLIO/m2temyu3txw10c898a7d.png'
      },
      {
        name: 'Chevrolet Silverado',
        price: 25861,
        img: 'https://res.cloudinary.com/durxpegdm/image/upload/v1715664204/PORTAFOLIO/nfbdvcr0rl32kljciydf.avif'
      },
      {
        name: 'Jetour x70',
        price: 25900,
        img: 'https://res.cloudinary.com/durxpegdm/image/upload/v1715664203/PORTAFOLIO/hjgg58kqgnbwkyv4pzkp.png'
      },
      {
        name: 'Mazda cx30',
        price: 25900,
        img: 'https://res.cloudinary.com/durxpegdm/image/upload/v1715664202/PORTAFOLIO/kcs7ib1cpv67knb8gbuf.jpg'
      },
      {
        name: 'Kia seltos',
        price: 18900,
        img: 'https://res.cloudinary.com/durxpegdm/image/upload/v1715664497/PORTAFOLIO/froq8fqtj44sdxabdok6.png'
      }
    ],
    carro: [],
    esCarroVisible: false,
    productosFiltrados:[]
  });

  const agregarAlCarro = (producto) => {
    const { carro } = state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name ? { ...x, cantidad: x.cantidad + 1 } : x
      );
      return setState({ ...state, carro: newCarro });
    }
    return setState({
      ...state,
      carro: state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  const mostrarCarro = () => {
    if (!state.carro.length) {
      return;
    }
    setState({ ...state, esCarroVisible: !state.esCarroVisible });
  };

  const handleBuscar = (busqueda) => {
    const productosFiltrados = state.productos.filter((producto) =>
      producto.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    setState({ ...state, productosFiltrados });
  };
  const { esCarroVisible } = state;

  return (
    <div>
      <Navbar
        esCarroVisible={esCarroVisible}
        mostrarCarro={mostrarCarro}
        carro={state.carro}
        productos={state.productos}
        onBuscar={handleBuscar}
      />
       <Routes>
          <Route path="/home" element={<Home/>} />          
          <Route  agregarAlCarro={agregarAlCarro}
          productos={state.productos} path="/layout" element={ <Layout>
            <Title />
            <Productos
              agregarAlCarro={agregarAlCarro}
              productos={
               (!state.productosFiltrados.length==0) ?
                state.productosFiltrados: state.productos}
            />
          </Layout>} />
        
        </Routes>
     
    </div>
  );
}

export default App;
