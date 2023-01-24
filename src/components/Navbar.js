import Logo from '../icons_assets/Logo.svg';
import React, { useState } from "react";


export const NavItems=[
    {
        Title: "Home",
        url: "#",
        cName:"nav-item",
    },
    {
        Title: "About",
        url: "#",
        cName:"nav-item",
    },
    {
        Title: "Menu",
        url: "#",
        cName:"nav-item",
    },
    {
        Title: "Reservation",
        url: "#",
        cName:"nav-item",
    },
    {
        Title: "Order Online",
        url: "#",
        cName:"nav-item",
    },
    {
        Title: "Login",
        url: "#",
        cName:"nav-item",
    },

]

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);

    return(
        <div className="navbar">
            <img className="nav_logo" src={Logo} alt='little lemon logo'/>
            <div className={`nav_items ${isOpen && "open"}`}>
                <ul>
                    {NavItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.Title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Navbar;