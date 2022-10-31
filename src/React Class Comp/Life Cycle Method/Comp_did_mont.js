import { Component } from "react";

export default class Comp_did_mont extends Component{
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("Component did mount");
    }
    render(){
        console.log("render");
        return(
            <div className="App">
            <h1>Component did mount (Life Cycle method)</h1>

            </div>
        )}}
    