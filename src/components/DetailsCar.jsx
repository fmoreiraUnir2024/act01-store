
const DetailsCar =({carro }) =>{
    
    return (
        <div className="car__details ">
                    <ul className="car__details-lista" >
                        {carro.map(x=> <li className="" key={x.name} >
                            <img alt={x.name} src={x.img} width='30' height='30' />
                             {x.name} <span>{x.cantidad}</span>  </li>)}
                    </ul>
                </div>
    
    )
    
    }
    
    export default DetailsCar;
    