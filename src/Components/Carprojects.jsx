import React from 'react'
import {useNavigate} from 'react-router-dom'

function Carprojects({carprojects, setCar}) {
    const navigate = useNavigate()
    function clickHandler(i) {
        
        setCar(i)
        navigate('/car')

    }
 

  return (
    <div className="projects-section grow " >
         {carprojects.map((i, j) => <div key={j} className='card' onClick={() => clickHandler(i)} >
        
         <img src={i.pic} alt="" />
        <h2>{i.name}</h2>
        <h3>{i.brand}</h3>
        <h4>{i.color}</h4>

      

    </div> )}

</div> 
  )
}

export default Carprojects