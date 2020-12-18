import React from 'react'
import data from "../assets/markup"
const Expertise = () => {
    return (
        <div className="bg-gray-800 mt-10 w-full p-4 h-64 md:h-48">
            <ul class="list-disc list-inside flex flex-wrap text-xs text-white font-mono">
             {data.skills.map(s=>{

return                 <li className="p-1 m-2">{s}</li>
             })

             
             }
             

            </ul>
        </div>
    )
}

export default Expertise
