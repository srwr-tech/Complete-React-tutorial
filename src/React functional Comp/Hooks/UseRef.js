import React from 'react'
import { useRef } from 'react';
function App (){
let inputRef=useRef(null)

function handleInput (){
    console.log("function called");
    // inputRef.current.value="1000"
    // inputRef.current.focus();
    // inputRef.current.style.display="none"
    inputRef.current.style.color="red"
}

    return(
        <div className="App">
        <h1>Use Ref in React</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleInput}>Handle input</button>
        </div>
    )
}
export default App;