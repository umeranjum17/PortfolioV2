import React from 'react'

const Card = ({project:{title,description,image}}) => {
    console.log(image)
    return (
        <div  className=" w-full md:w-1/4 m-1/6 shadow-md rounded-md" style={{margin:"2% 4%"}}>
           <img alt="image-project"  src={require('../assets/'+image)} ></img> 
           <h3 className="p-3 text-xl font-semibold">
              {title}
           </h3>
           <p className="hidden md:block text-md p-3 font-serif"> {description}</p>
        </div>
    )
}

export default Card
