import React from 'react'

const Card = () => {
    return (
        <div className="h-64 m-8 w-56 shadow rounded-md">
           <img class="lazy-loaded" src="//via.placeholder.com/350x150" data-lazy-type="image" data-src="//via.placeholder.com/350x150"></img> 
           <h3 className="p-3 text-xl font-semibold">
               My Projects
           </h3>
           <p className="text-md p-3 font-serif"> Lorem ipsum, dolor sit ameto aspernatur ullam dolores repellendus!</p>
        </div>
    )
}

export default Card
