import Logo from './Logo';
import Car from './Car';
import Searcher from './Searcher';
import { Link, useLocation} from 'react-router-dom';

const Navbar = ({ carro, esCarroVisible, mostrarCarro, productos, onBuscar }) => {
    const location = useLocation();
    return (
        <nav className="navbar">
            <Logo />
            <Link className="navbar__link" to="/home">
            <img className='navbar__link--ico' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/home.png" alt="home"/>
                Home</Link>
            <Link className="navbar__link" to="/layout">
            <img className='navbar__link--ico' width="50" height="50" src="https://img.icons8.com/ios-filled/50/list.png" alt="list"/>
                Lista de autos
                
            </Link>
            {location.pathname === '/layout' && (
                <Searcher
                    productos={productos}
                    onBuscar={onBuscar} 
                />
                )}
         
            <Car
                carro={carro}
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}
            />
        </nav>
    );
}

export default Navbar;