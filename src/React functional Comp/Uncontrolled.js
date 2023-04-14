import React,{useRef} from "react";
function Uncontrolled (){
    let inputRef=useRef(null);
   
    function submitform(e){
        e.preventDefault ()
     // Using Use REf
        console.log("input filed value ",inputRef.current.value);  
     // Using DOM
        let input2=document.getElementById("input2").value
        console.log(input2);
    }
    return (
        <div className="App">
        
        <form onSubmit={submitform}>
        <input ref={inputRef} type ="text"/> <br />
        <input id="input2" type="text"/> <br /> <br />
        
        <button> Submit</button>
        </form>
        
        </div>
    )   
}
export default Uncontrolled;