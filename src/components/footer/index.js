import React, { useState } from "react";
import './style.css'
import Logo from '../../assets/Flash-Logo.png'
import { Link } from "react-router-dom";

function Footer() {




    return (
        <footer>
        <img id="logoFooter" src={Logo} />
        <span>Todos os direitos reservados ©</span>
        <span>Desenvolvido por: Samuel Favrin Ramos</span>
        <nav className="footer-navegation">
            <ul className="footer-list">
                <a href="./index.html">
                    <li>Home</li>
                </a>
                <a href="./contatos.html">
                    <li>Contato</li>
                </a>
                <a href="./fotos.html">
                    <li>Fotos</li>
                </a>
                <a href="./comentarios.html">
                    <li>Comentários</li>
                </a>
                
            </ul>
        </nav>
    </footer>
    )
}

export default Footer;