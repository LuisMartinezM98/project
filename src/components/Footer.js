import Logo from '../icons_assets/Logo.svg'
import {Link} from 'react-router-dom';


function Footer() {
    return(
        <footer>
            <div className='footerLogo'>
            <Link to='/'>
                <img src={Logo} />
            </Link>
            </div>
            <div className='footerItem1'>
                <ul>
                    <h2>Doormat Navigation</h2>
                    <ui>Home</ui>
                    <ui>About</ui>
                    <ui>Menu</ui>
                    <ui>Reservation</ui>
                    <ui>Order Online</ui>
                    <ui>Login</ui>
                </ul>
            </div>
            <div className='footerItem2'>
                <h2>Contact</h2>
                <ui>Address</ui>
                <ui>Phone number</ui>
                <ui>Email</ui>
            </div>
            <div className='footerItem3'>
                <h2>Social Media Links</h2>
                <ui>Address</ui>
                <ui>Phone number</ui>
                <ui>Email</ui>
            </div>
        </footer>
    );
};

export default Footer;