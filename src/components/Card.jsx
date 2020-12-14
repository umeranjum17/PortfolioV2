import React from 'react'

const Card = ({project:{title,description,image}}) => {
    console.log(image)
    return (
        <div className=" m-4 h-72 w-72  shadow-md rounded-md">
           <img   src={require('../assets/'+image)} ></img> 
           <h3 className="p-3 text-xl font-semibold">
              {title}
           </h3>
           <p className="hidden md:block text-md p-3 font-serif"> {description}</p>
        </div>
    )
}

export default Card
