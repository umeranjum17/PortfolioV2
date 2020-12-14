import React from 'react'
import Expertise from './Expertise'

const About = () => {
    return (<div className="flex-1 flex flex-col px-3">
        <h1 className="text-xl md:text-3xl font-black">
            More about me
    </h1>
        <div className="flex-1 mb-10 text-md md:text-xl font-serif">
            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        </div>
        <hr></hr>

        <h1 className="mt-10 text-xl md:text-3xl font-black">
            Top Expertise
    </h1>
        <div className="flex-1 mb-10 text-md md:text-xl font-serif">
            Full Stack Engineer with primary focus on JavaScript and Python technologies.
        <p>
                My working philosophies:
                <ul>
                    <li>

                        – Use the right tool for the job. A programming language <br />is just a tool!
                    </li>
                    <li>

                        – Always try to learn something new
                    </li>
                </ul>
            </p>
            <Expertise />
        </div>
    </div>
    )

}

export default About
