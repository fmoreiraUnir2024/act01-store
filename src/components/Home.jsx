import { useState, useEffect } from "react";
const Home = (props) => {
    const [photoUrl, setPhotoUrl] = useState([]);
    const [query, setQuery] = useState(true); 
  
    const fetchData = async () => {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=auto deportivo`, {
        headers: { 'Authorization': 'Client-ID TZzn2ik8L2Uk0KrVPtmsfc5yiT7vRUfBt0SmT9VDqq4' }
      });
      const data = await response.json();
      console.log(data)
      setPhotoUrl(data.urls.regular);
    }
  
    useEffect(() => {
      fetchData();
    }, [query]); 
  
    const open = url => window.open(url);
  
    const handleButtonClick = () => {
      setQuery(!query); 
    };
  
    return (
      <div className="car">
      <div className="car__header">
        <h2>Bienvenido a CarroLife</h2>
        <h5>Puedes buscar y comprar los carros de juguete </h5>
        <button className="car__button" onClick={handleButtonClick}>Click para cambiar!!</button>
      </div>
      <div className="car__content">
        <div className="car__image-container">                     
              <img className="car__image"  onClick={handleButtonClick}  src={photoUrl} alt="Random Car Image" />              
        </div>
      </div>
    </div>
    );
  }

export default Home;
