import React,{useState,useEffect,useRef} from 'react';
import axios from "axios";


function Practice1() {
const[counter, SetCounter]= useState(0)
const [dec, SetDec]= useState(100)

const [catFact,SetCatFact]= useState("")
const[data, SetData]= useState("")

useEffect(()=>{
    document.title= `inc- ${counter} | dec - ${dec}`
    console.log("helo sir")
})
const getNewFact= ()=>{
    axios.get("https://catfact.ninja/fact").then((response)=>{
     console.log("response",response.data.fact)
     SetCatFact(response.data.fact)
    })};


  return (
    <div>
        <p onClick={(e)=> SetCounter(counter +1)}>this is the Counter  {counter} </p>
        <h1 onClick={(e)=> SetDec(dec -1)}>this is decrement {dec}</h1>
        <br/>
        <br/>
        <button onClick={()=>getNewFact()}>get new Fact  {catFact}</button>
        <br/>
        <br/>
        <div>
        <textarea onChange={(e)=>SetData(e.target.value)}> </textarea>
        <h1>{data}</h1>
         </div>
    </div>
  )
}

export default Practice1;
