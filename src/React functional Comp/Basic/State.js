
import React,{useState} from "react";
function State (){
    const [data,setdata]=useState(0)
function apple(){
    setdata(data+1)
}
    return(
        <div className="App">
        <h1>{data}</h1>
        <button onClick={apple}>Click me</button>
        
        </div>
    )
}
export default State;