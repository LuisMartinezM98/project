import {Routes, Route, Link} from 'react-router-dom';
import Logo from '../icons_assets/Logo.svg'
import Header from './Header';


function Nav () {
    return(
        <nav className='nav'>
            <Link to="/">
                <img src={Logo} width='100'/>
            </Link>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/" className="nav-item">About</Link>
            <Link to="/" className="nav-item">Menu</Link>
            <Link to="/" className="nav-item">Reservation</Link>
            <Link to="/" className="nav-item">Order Online</Link>
            <Link to="/" className="nav-item">Login</Link>
        </nav>
    );
};

export default Nav;