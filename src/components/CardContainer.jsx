import React from 'react'
import CardInfo from "./CardInfo"

const CardContainer = ({data}) => {
  return (
<div className='cardCont'>
{data.map((item)=>(
  <CardInfo {...item}/>
))}

</div>
  )
}

export default CardContainer