import React from 'react'
import {useState} from 'react'

function Appp (){
    const [name,setname]=useState("");
    const [tnc,settnc]=useState(false);
    const [data,setdata]=useState(" ");

    function getformdata(e){
        console.log(name,tnc,data);
        e.preventDefault()
    }
    return (
        <>
        <h1>Form Validation in React</h1>
        <form onSubmit={getformdata}>
        <input type="text"  placeholder ="Enter name" onChange={(e)=>setname(e.target.value)}/>
        <br /> <br />
        
        <select onChange={(e)=>setdata (e.target.value)}>
        <option >Select Option</option>
        <option >Marvel</option>
        <option >DC</option>
        
        </select> <br />
        <input type="checkbox" onChange={(e)=>settnc (e.target.checked)} />
        <span>Accept Turm & Condition <br /> <br /></span>
        <button type='Submit'>Submit</button>
        </form>
        
        </>
    )
}
export default Appp;

