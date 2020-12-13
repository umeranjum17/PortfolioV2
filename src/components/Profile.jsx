import React from 'react'
import me from "../assets/me.gif"
const Profile = () => {
    return (
        <div className="w-64 h-64" style={{marginTop:"-100px",marginLeft:"100px",border:"4px solid black"}}>
            <img src={me} alt=""/>
        </div>
    )
}

export default Profile
