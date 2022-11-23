import React from "react";
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
function Basic (){
    return(
        <div className="App">
        <Router>
        <Routes>
        <Link to="/About">About</Link> <br />
        <Link to="/Contact">Contact</Link>
        <Route path="/About"><About/></Route>
        <Route path="/Contact"><Contact/></Route>
        
        </Routes>
        </Router>
        </div>
    )
}

function About (){
    return(
        <div className="User">
        <h1>This is User about</h1>
        
        </div>
    )
}
function Contact (){
    return(
        <div className="User">
        <h1>This is User contact</h1>
        
        </div>
    )
    }
export default Basic