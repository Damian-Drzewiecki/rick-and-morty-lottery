import React from "react"
import logo_and from '../assets/logo/logo_and.png';
import logo_characters from '../assets/logo/logo_characters.png';
import logo_morty from '../assets/logo/logo_morty.png';
import logo_rick from '../assets/logo/logo_rick.png';
import './Logo.scss';

export default function Logo() {
    return (
        <div className="logo">
            <img className="logo__word" src={logo_and} alt="and word" />
            <img className="logo__word" src={logo_characters} alt="characters word" />
            <img className="logo__word" src={logo_morty} alt="morty word" />
            <img className="logo__word" src={logo_rick} alt="rick word" />
        </div>
    )
}