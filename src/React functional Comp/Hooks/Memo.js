import React,{useState,useMemo} from "react";
function Memo (){
    const [data,setdata]=useState(0);
    const[count,setcount]=useState(10);
    const multiple=useMemo(function multicount(){
        console.log("rendering multicount");
        return count*5},[count])
    

    return(
        <div className="App">
        <h1>{data}</h1>
        <h1>{count}</h1>
        <h1>{multiple}</h1>
        
        <button onClick={()=>setdata(data+1)}>data</button>
        <button onClick={()=>setcount(count*2)}>count</button>
        </div>
    )}
export default Memo;