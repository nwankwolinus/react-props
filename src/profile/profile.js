/* eslint-disable no-undef */
import React from 'react'
import ChildComponent from './ChildComponent';
import { propTypes } from "prop-types";

function MyProfile ({fullName, bio, proffession}) {
    return (
        <div>
            <div className="my-component">
                <h2>{fullName}</h2>            
                <h3>{proffession}</h3>
                <p>{bio}</p>
            </div>
            <ChildComponent/>
        </div>
    )
}

MyProfile.defaultProps = {
    fullName: "Name: Linus Nwankwo",
    bio: "Bio: GoMyCode Student",
    proffession: "Proffession: Student"
}

MyProfile.propTypes = {
    fullName: propTypes.string,
    proffession: propTypes.string,
    bio: propTypes.string
}

export default MyProfile;