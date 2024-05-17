import React, { useState } from "react";
import './header.css'
import Logo from '../../assets/Flash-Logo.png'
import { Link } from "react-router-dom";

function Header() {




    return (
        <header>
            <nav>
                <ul>
                    <Link to={'/'}>
                        <img id="logo" src={Logo}></img>
                    </Link>
                    <Link to={'/'}>
                        <li id='link' >Home</li>
                    </Link>

                    <Link to={'/contato'}>
                        <li id='link' >Contato</li>
                    </Link>

                    <Link to={'/comentarios'}>
                        <li id='link' >Comentários</li>
                    </Link>

                    <Link to={'/login'}>
                        <li id='link'>logar</li>
                    </Link>
                    
                    {/* onClick={() =>  */}

                </ul>
            </nav>
        </header>
    )
}

export default Header;