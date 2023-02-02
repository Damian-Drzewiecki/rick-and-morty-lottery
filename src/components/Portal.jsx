import React from "react";
import './Portal.scss';

export default function Portal(props) {

    const { character, getRandomCharacter } = props

    return (
        <div className='portal_container'>
            <div className="portal_blur"></div>
            <div className="portal"></div>
            <div className="portal1"></div>
            <div className="portal2"></div>
            <div className="portal3"></div>
            <div className="portal4"></div>
            <div className="imgFade">
                <img className="characterImg" src={character?.image} alt="" onClick={() => getRandomCharacter()}></img>
            </div>
        </div>
    )
}