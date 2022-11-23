import React from "react";
import {data} from './App'
function ChildC (){
    return(
        <div className="App">
        <data.Consumer> {
            (name)=>{
                return( <h1>hi my name is {name}</h1> )
            }
        }
        </data.Consumer>
        </div>
    )}
export default ChildC;