import React from "react";
import Child from './Child'
function Parents (){
    function ParentAlert (data){
    alert(data);
    }
    return(
        <div className="App">
        <h1>Lifting state up</h1>
        <Child alert={ParentAlert}/>
        </div>
    )}
export default Parents;