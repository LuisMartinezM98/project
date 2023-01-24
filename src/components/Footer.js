import Logo from '../icons_assets/Logo.svg'
import { NavItems } from './Navbar';

export const ConcatItems=[
    {
        Title: "Address",
        url: "#",
    },
    {
        Title: "Phone number",
        url: "#",
    },
    {
        Title: "Email",
        url: "#",
    },
]

function Footer() {
    return(
        <footer >
            <div className='footer'>
                <div className='footerLogo'>
                        <img src={Logo} alt="logo"/>
                </div>
                <div className="footerItem">
                    <ul>
                        <h2 className="FooterTitle">Doormat Navigation</h2>
                        {NavItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className="footerItem" href={item.url}>
                                    {item.Title}
                                </a>
                            </li>
                        );
                    })}
                    </ul>
                </div>
                <div className="footerItem2">
                    <ul>
                    <h2 className="footerTitle">Contact</h2>
                    {ConcatItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className="contactItem" href={item.url}>
                                    {item.Title}
                                </a>
                            </li>
                        );
                    })}
                    </ul>
                </div>
                <div className="footerItem3">
                <ul>
                    <h2 className="FooterTitle">Social Media Links</h2>
                    {ConcatItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className="socialMedia" href={item.url}>
                                    {item.Title}
                                </a>
                            </li>
                        );
                    })}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;