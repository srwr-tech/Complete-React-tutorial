import { Component } from "react";
export default class Users extends Component{
    componentWillUnmount(){
        alert("Component will unmount")
        console.log("component Unmount called");
    }
    render(){
        return(
            <div className="App">
            <h1>Componwnt will unmount</h1>
            </div>
        )}}
