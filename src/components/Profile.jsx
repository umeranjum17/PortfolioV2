import React from 'react'
import me from "../assets/me.gif"
const Profile = () => {
    return (
        <div className="w-48 h-48 md:w-64 my-10 lg:w-64" style={{border:"4px solid black"}}>
            <img src={me} alt=""/>
        </div>
    )
}

export default Profile
