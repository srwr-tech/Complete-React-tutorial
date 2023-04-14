import React from "react";
import Child from './Child'
function Parents (){
    function ParentAlert (name){
    alert(name);
    }
    return(
        <div className="App">
        <h1>Lifting state up</h1>
        <Child newdata={ParentAlert}/>
        </div>
    )}
export default Parents;