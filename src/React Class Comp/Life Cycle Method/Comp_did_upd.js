import { Component } from "react";

export default class Comp_did_upd extends Component {
    constructor() {
        super();
        console.log("constructor called");
        this.state = { count: 1 }
    }
    apple (){
        this.setState({count:this.state.count+1})
        console.log("state called");
    }
    componentDidMount(){
        console.log("component did mount");
    }
    componentDidUpdate() {
        console.log("Component did update called");
    }
   
    render() {
        console.log("render");
        return (
        <div className="App">
        <h1>Component did Update</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.apple()}>Count me in</button>

            </div>
        )
    }
}