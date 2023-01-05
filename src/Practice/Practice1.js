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
     console.log(response.data.fact)
     SetCatFact(response.data.fact)
    })};


  return (
    <div>
        <h1>this is the Counter  {counter} </h1>
        <h1> this is Decreased Counter {dec}</h1>
        <button onClick={(e)=> SetCounter(counter +1)}>increased</button>
        <button onClick={(e)=> SetDec(dec -1)}>Decreased</button>
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
