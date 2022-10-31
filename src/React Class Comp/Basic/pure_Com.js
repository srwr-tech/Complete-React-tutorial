import React from "react";
import { PureComponent } from "react";
import User from './User_pure'
export default class pure_Com extends PureComponent{
    constructor(){
        super();
        this.state={count:" : sarwar"}
    }
    render(){
        console.log("rendering");
        return(
            <div className="App">
           
            <button onClick={()=>this.setState({count:"Alam"})}>Count</button>
            <User count={this.state.count}/>
            </div>
        )}}
    