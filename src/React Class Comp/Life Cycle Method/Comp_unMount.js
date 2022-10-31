// it will called after DOM remove
//so here we should have to create one child component and remove it to show the working of Component unmount
// child component name is users.js


import { Component } from 'react';
import Students from './Users'
export default class Comp_unMount extends Component{
    constructor(){
        super();
        console.log("Constructor called");
        this.state={show:true}
    }
    render(){
        console.log("render called");
        return(
            <div className="App">
            {this.state.show? <Students/>:<h1>Child component Removed</h1>}
            <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle button for Remove DOM</button>
            </div>
        )}}
    