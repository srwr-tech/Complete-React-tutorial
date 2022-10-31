import React from "react";
import { useState } from "react";
function Controlled(){
    const[data,setdata]=useState("")
    return(
        <div className="App">
        <input type="text" value={data} onChange={(e)=>setdata(e.target.value)} />
        <h2>value{data}</h2>
        
        </div>
    )
}
export default Controlled;