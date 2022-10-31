import { Component } from "react";

export default class Should extends Component{
    constructor (){
        super();
        console.log("constructor called");
        this.state={count:0}
       
    }
    
    componentDidUpdate(){
        console.log("component did update");
    }
    shouldComponentUpdate(){
        console.log("should component update called", this.state.count);
        if (this.state.count>5 && this.state.count<10) {
            return true;}}
            
            
            render(){
                console.log("render called");
                return(
                    <div className="App">
                    <h1>Should component Update</h1>
                    <h1>{this.state.count}</h1>
                    <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
                    </div>
                )
            }
            
}