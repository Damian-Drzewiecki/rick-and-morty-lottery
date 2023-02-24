import React, { useState } from "react";
import './Portal.scss';
import classNames from "classnames"

export default function Portal(props) {

    const { character, getRandomCharacter, setImgClick } = props
    const [franek, setfranek] = useState(false)

    function imgAnimation() {
        setfranek(true)
        setImgClick(true)
        setTimeout(() => {
            getRandomCharacter()
        }, 1000);
        setTimeout(() => {
            setfranek(false)
            setImgClick(false)
        }, 2000);
    }

    return (
        <div className='portal_container'>
            <div className="portal_blur"></div>
            <div className="portal"></div>
            <div className="portal1"></div>
            <div className="portal2"></div>
            <div className="portal3"></div>
            <div className="portal4"></div>
            <div className="imgFadeIn">
                <img className={classNames("characterImg", { "characterImgInAndOut": franek })}
                    src={character?.image} alt="" onClick={() => imgAnimation()}></img>
            </div>
        </div >
    )
}