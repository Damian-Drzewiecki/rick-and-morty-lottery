import React from "react";
import './Profile.scss';
import classNames from "classnames";

export default function Profile(props) {

    const { character, imgClick } = props
    return (
        <div className="characterProfile">
            <div className="profileData1">
                <div className={imgClick ? "p1in" : ""}>
                    <p className="p1">ID:{" "}{character?.id}</p>
                </div>
                <div className={imgClick ? "p2in" : ""}>
                    <p className="p2">NAME:{character?.name}</p>
                </div>
                <div className={imgClick ? "p3in" : ""}>
                    <p className="p3">GENDER:{character?.gender}</p>
                </div>
            </div>
            <div className="profileData2">
                <div className={imgClick ? "p4in" : ""}>
                    <p className="p4">SPECIES:{character?.species}</p>
                </div>
                <div className={imgClick ? "p5in" : ""}>
                    <p className="p5">STATUS:{character?.status}</p>
                </div>
                <div className={imgClick ? "p6in" : ""}>
                    <p className="p6">TYPE:{character?.type || " -"}</p>
                </div>
                <div className={imgClick ? "dotClick" : ""}>
                    <div className="p7">
                        <p className='dot'>█</p>
                    </div>
                </div>
            </div>
        </div>
    )
}