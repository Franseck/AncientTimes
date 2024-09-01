import React from 'react'

const CardInfo = ({img,name,history})=> {
  return (

    <div className='cards'> 
        <div className='cc'>
      <div className='front'>
        
        <img className="cardImg" src={img} alt="" />
        <h3>{name}</h3>
      </div>

<div className='back'>
  <p>{history[0]}</p>
  <p>{history[1]}</p>
  <p>{history[2]}</p>
  <p>{history[3]}</p>
</div>
    </div>
    </div>
  )
}

export default CardInfo