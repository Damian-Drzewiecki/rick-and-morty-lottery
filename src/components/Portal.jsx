import React, { useState } from "react";
import './Portal.scss';
import classNames from "classnames"

export default function Portal(props) {

    const { character, getRandomCharacter, setImgClick } = props
    const [imgState, setimgState] = useState(false)

    function imgAnimation() {
        setimgState(true)
        setImgClick(true)
        setTimeout(() => {
            getRandomCharacter()
        }, 1000);
        setTimeout(() => {
            setimgState(false)
            setImgClick(false)
        }, 2000);
    }

    return (
        <div className='portal'>
            <div className="portal__element portal__element--blur"></div>
            <div className="portal__element portal__element--background"></div>
            <div className="portal__element portal__element--lime"></div>
            <div className="portal__element portal__element--yellow"></div>
            <div className="portal__element portal__element--green"></div>
            <div className="portal__element portal__element--white"></div>
            <div className="portal__image_container">
                <img className={classNames("portal__image", { "portal__image--animation": imgState })}
                    src={character?.image} alt="" onClick={() => imgAnimation()}></img>
            </div>
        </div >
    )
}