import React,{useState} from 'react'
import "./Practice2.css"

 function Practice2(props) {
    let x= new Date().toLocaleTimeString()
    const [count, SetCount]= useState("time is about to start")
    setInterval(()=>{
        SetCount(x)
    },1000)
  return (
    <div className='container'>
    <div className='container1'>{count}</div>
      
    </div>
  )
}

export default Practice2;
