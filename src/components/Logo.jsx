import React from "react"
import logo_and from '../assets/logo/logo_and.png';
import logo_characters from '../assets/logo/logo_characters.png';
import logo_morty from '../assets/logo/logo_morty.png';
import logo_rick from '../assets/logo/logo_rick.png';
import './Logo.scss';

export default function Logo() {
    return (
        <div className="logoFade">
            <img className="logo_and" src={logo_and} alt="Logo_and" />
            <img className="logo_characters" src={logo_characters} alt="Logo_characters" />
            <img className="logo_morty" src={logo_morty} alt="Logo_morty" />
            <img className="logo_rick" src={logo_rick} alt="Logo_rick" />
        </div>
    )
}