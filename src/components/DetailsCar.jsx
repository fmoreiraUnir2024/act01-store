
const DetailsCar =({carro }) =>{
    
    return (
        <div className="detallesCarro">
                    <ul  ul >
                        {carro.map(x=> <li className="producto" key={x.name} >
                            <img alt={x.name} src={x.img} width='30' height='30' />
                             {x.name} <span>{x.cantidad}</span>  </li>)}
                    </ul>
                </div>
    
    )
    
    }
    
    export default DetailsCar;
    