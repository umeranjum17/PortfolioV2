import React from 'react'
import "./terminal.scss"
import Profile from './Profile'
const Terminal = () => {
    const TerminalButtons = <div className="flex">
        <div className='terminal__button' id="id1">

        </div><div className='terminal__button' id="id2">

        </div><div className='terminal__button' id="id3">

        </div>
    </div>
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <div className="mb-10 font-bold text-6xl text-center">

                    {`< Hi, I am Umer Farooq />`} <span id="cursor" className="blinking-cursor">{`;`}</span>

                </div>

                <div className="flex h-10 bg-black items-center">
                    <div className="flex flex-intial px-2" style={{ color: "white" }}>
                        {TerminalButtons}
                    </div>
                </div>
                <div className="flex-1 bg-gray-500 justify-center items-center" style={{ height: "57vh" }}>
                    <div className="flex justify-between items-center p-10" style={{ height: "100%" }}>
                        <div className="flex-1 h-48 w-32">
                      <Profile/> 
                        </div>
                        <div className="flex-1 bg-gray-300 relative" style={{ background: "rgba(0,0,0,0.1)" }}>
                            <div className="c c-t z-10"></div>
                            <div className="c c-b"></div>
                            <div className="c c-r"></div>
                            <div className="c c-l"></div>
                            <div className="backgroundElement bg-yellow-300 absolute w-full h-full" >

                            </div>
                            <div className="card p-5  h-48 relative bg-yellow-100 w-full z-10">
                                <h1 className="font-black text-3xl">
                                    What I do?
</h1>
                                <p className="font-serif text-xl">
                                    I was a lead Full Stack Engineer in a past life, now I want to be an entire IT department.
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Terminal
