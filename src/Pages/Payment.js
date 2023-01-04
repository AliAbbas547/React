import React from 'react'
import { useParams} from 'react-router-dom';

function Payment() {
    const Params= useParams();
  return (
    <div>
        <h1> payment- {Params.Price}</h1>
      
    </div>
  )
}

export default  Payment;