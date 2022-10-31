import { Component } from "react";

export default class prop extends Component{
   render(){
    return(
        <div className="App">
        <h1>{this.props.name}</h1>
        <h1>{this.props.Email}</h1>
        
        </div>
    )
   }
}