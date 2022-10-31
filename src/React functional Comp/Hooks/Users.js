     import React,{useEffect} from "react";
      function Users (props){
    useEffect(()=>{
        console.log("useEffect called");
    },[])
    return(
        <div className="App">
        <h1>Data coming from props : {props.data }</h1>
        
        </div>
    )}
   export default Users;