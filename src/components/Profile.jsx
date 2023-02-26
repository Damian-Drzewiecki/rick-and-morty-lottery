import React from "react";
import './Profile.scss';
import classNames from "classnames";

export default function Profile(props) {

    const { character, imgClick } = props
    return (
        <div className="character">
            <div className="character__data_one">
                <div className={imgClick ? "character__id--anim" : ""}>
                    <p className="character__id">ID:{" "}{character?.id}</p>
                </div>
                <div className={imgClick ? "character__name--anim" : ""}>
                    <p className="character__name">NAME:{character?.name}</p>
                </div>
                <div className={imgClick ? "character__gender--anim" : ""}>
                    <p className="character__gender">GENDER:{character?.gender}</p>
                </div>
            </div>
            <div className="character__data_two">
                <div className={imgClick ? "character__species--anim" : ""}>
                    <p className="character__species">SPECIES:{character?.species}</p>
                </div>
                <div className={imgClick ? "character__status--anim" : ""}>
                    <p className="character__status">STATUS:{character?.status}</p>
                </div>
                <div className={imgClick ? "character__type--anim" : ""}>
                    <p className="character__type">TYPE:{character?.type || " -"}</p>
                </div>
                <div className={imgClick ? "character__dot--anim" : ""}>
                    <div className="character__dot">
                        <p className='character__dot--flashes'>█</p>
                    </div>
                </div>
            </div>
        </div>
    )
}