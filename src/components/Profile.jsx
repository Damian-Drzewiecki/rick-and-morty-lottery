import React from "react";
import './Profile.scss';

export default function Profile(props) {

    const { character } = props

    return (
        <div className="characterProfile">
            <div className="profileData1">
                <p className='p1'>ID:{" "}{character?.id}</p>
                <p className='p2'>NAME:{character?.name}</p>
                <p className='p3'>GENDER:{character?.gender}</p>
            </div>
            <div className="profileData2">
                <p className='p4'>SPECIES:{character?.species}</p>
                <p className='p5'>STATUS:{character?.status}</p>
                <p className='p6'>TYPE:{character?.type || " -"}</p>
                <div className="p7">
                    <p className='dot'>█</p>
                </div>
            </div>
        </div>
    )
}