import React from "react"
function User (props){
    // useEffect(()=>{
    //     console.log("use Effect called from data");
    // },
    // [props.count,props.data])
    return(
        <div className="App">
        <h1>count props :{props.count}</h1>
        <h1>Data props : {props.data}</h1>
        </div>
    )}
export default User;