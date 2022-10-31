            // useEffect using state & Props(User component)
import Prop from './Users'
import React,{useState, useEffect} from "react";
 function Effect (){
    const[data,setdata]=useState(0);
    useEffect(()=>{
        console.log("use effect called");
        console.log("same as Component did mount");
    },[])
    return(
        <div className="App">
        <h1>Use effect</h1>
        <h1>Data from state: {data}</h1>
        <Prop data={data}/>
        <button onClick={()=>setdata(data+1)}>push me</button>
        </div>
    )}
 export default Effect;

 
 