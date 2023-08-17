import React from "react";
import './Profile.scss';

export default function Profile(props) {

    const { character, imgClick } = props
    return (
        <div className="character">
            <div className="character__data_one">
                <div className="character__id">
                    <p className={imgClick ? "character__id--anim" : ""} >ID:{" "}{character?.id}</p>
                </div>
                <div className="character__name">
                    <p className={imgClick ? "character__name--anim" : ""} >NAME:{character?.name}</p>
                </div>
                <div className="character__gender">
                    <p className={imgClick ? "character__gender--anim" : ""} >GENDER:{character?.gender}</p>
                </div>
            </div>
            <div className="character__data_two">
                <div className="character__species">
                    <p className={imgClick ? "character__species--anim" : ""} >SPECIES:{character?.species}</p>
                </div>
                <div className="character__status">
                    <p className={imgClick ? "character__status--anim" : ""} >STATUS:{character?.status}</p>
                </div>
                <div className="character__type">
                    <p className={imgClick ? "character__type--anim" : ""} >TYPE:{character?.type || " -"}</p>
                </div>
                <div className="character__dot">
                    <div className={imgClick ? "character__dot--anim" : ""} >
                        <p className='character__dot--flashes'>█</p>
                    </div>
                </div>
            </div>
        </div>
    )
}