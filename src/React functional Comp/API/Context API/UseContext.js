import React from "react";
import { useContext } from "react";
import {data} from './App'
function ChildC (){
    const firstName=useContext(data);
    return(
        <div className="App">
        <h1>Hi my name is from use context hook is {firstName}</h1>
        </div>
    )}
export default ChildC;