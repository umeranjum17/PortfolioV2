import React from 'react'
import linkedin from "../assets/linkedin.PNG"
import pdf from "../assets/resume.pdf"

const FindMe = () => {
    return (
        <div className="flex-1">
            <img className="lazy-loaded" src={linkedin} data-lazy-type="image" data-src="//via.placeholder.com/600/600" alt="element"></img>
            <h1 className="font-black text-xl md:text-3xl my-10 text-center">Find Me on LinkedIn & Github </h1>
            <ul className="flex items-center justify-center text-2xl text-white">
                <li><a href="https://www.linkedin.com/in/umer-farooq-ab8315131/" className="social-icon"> <i className="fa text-white mx-2 bg-blue-800 fa-linkedin"></i></a></li>
                <li><a href="https://github.com/umeranjum17" className="social-icon"> <i className="fa text-white mx-2  bg-gray-800 fa-github"></i></a></li>
            </ul>
            <div className="font-black text-link text-center mt-10">
                <a href={pdf} target="_blank"> Resume.pdf </a>
            </div>
        </div>
    )
}

export default FindMe
