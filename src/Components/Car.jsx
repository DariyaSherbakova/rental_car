import React from 'react'

function Car({car}) {
  return (
    <div className='project-section grow' >
        <h2>{car.name}</h2>
        <img src={car.pic} alt="" />
       
        <p>{car.brand}</p>
        </div>
  )
}

export default Car