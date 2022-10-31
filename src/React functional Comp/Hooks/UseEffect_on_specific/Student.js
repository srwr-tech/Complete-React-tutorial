import React,{useState} from "react"
import { useEffect } from "react";
import User from './User'
function Student (){
const [data,setdata]=useState(10);
const[count,setcount]=useState(100);
useEffect(()=>{
    console.log("Use Effect called for data");
},[data])
    return(
        <div className="App">
        <User count={count} data={data}/>
        <button onClick={()=>setdata(data+1)}>Update data</button>
        <button onClick={()=>setcount(count+1)}>Update count</button>
        </div>
    )}
export default Student;