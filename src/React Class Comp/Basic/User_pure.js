import React from "react";
import { PureComponent } from "react";
export default class User_pure extends PureComponent{
    render(){
        console.log("checking child com rendering");
        return(
            <div className="App">
            <h1>Count from Props{this.props.count}</h1>
            </div>
        )
    }
}