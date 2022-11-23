import React, { createContext } from "react";
import ChildA from './ChildA'

const data=createContext();
 function App (){
    const name="Sarwar Alam"
    return (
        <div className="App">
        <data.Provider value={name}>
        <ChildA/>
        </data.Provider>
        </div>
    )
 }
 export default App;
 export {data};