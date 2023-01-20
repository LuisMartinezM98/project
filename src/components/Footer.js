import Logo from '../icons_assets/Logo.svg'
import {Link} from 'react-router-dom';


function Footer() {
    return(
        <footer className='footer'>
            <div className='footerLogo'>
            <Link to='/'>
                <img src={Logo} alt="logo"/>
            </Link>
            </div>
            <div className='footerItem'>
                <ul>
                    <h2>Doormat Navigation</h2>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservation</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
            <div className='footerItem'>
                <h2>Contact</h2>
                <li><a href='/'>Address</a></li>
                <li><a href='/'>Phone number</a></li>
                <li><a href='/'>Email</a></li>
            </div>
            <div className='footerItem'>
                <h2>Social Media Links</h2>
                <li><a href='/'>Address</a></li>
                <li><a href='/'>Phone number</a></li>
                <li><a href='/'>Email</a></li>
            </div>
        </footer>
    );
};

export default Footer;