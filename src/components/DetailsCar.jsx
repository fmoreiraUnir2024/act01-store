
const DetailsCar =({carro }) =>{
    
    return (
        <div className="detallesCarro">
                    <ul className="detallesCarro-lista" >
                        {carro.map(x=> <li className="producto" key={x.name} >
                            <img alt={x.name} src={x.img} width='30' height='30' />
                             {x.name} <span>{x.cantidad}</span>  </li>)}
                    </ul>
                </div>
    
    )
    
    }
    
    export default DetailsCar;
    