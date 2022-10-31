import React from 'react'
import { useState } from 'react'
// import './App.css'

export default function App() {
  const [input , setInput] = useState("")
  const [items , setItems] = useState([])


  const HandelAdd = ()=>{
    const item = {
      id : Math.floor(Math.random()*1000),
      value :input
    }
    setItems(oldItems=> [item,...oldItems])
    setInput("")
  }

  const HandelDelete = (id)=>{
   const a=  items.filter((item)=>item.id!==id )
    setItems(a)

  }

  const HandelEdit = (id)=>{
    const a=  items.filter((item)=>item.id!==id )
    setItems(a)
    const edit = items.find((item)=>item.id===id )
    setInput(edit.value)

    // setItems(oldItems => [edit,...oldItems])

  }


  return (
    <div className='app'>
      <input type="text" placeholder='Enter Todo' value={input}
      onChange={(e)=>{setInput(e.target.value)}}  />
      <button onClick={HandelAdd} >Add</button>
      {
        items.map((x)=>{
          return <ul className='list' key={x.id}>
            {x.value}
            <span >
            <button className='btn' onClick={()=>HandelEdit(x.id)} >Edit</button>
            <button className='btnn' onClick={()=>HandelDelete(x.id)} >Remove</button>
            </span>     
          </ul>
        })
      }
    </div>
  )}
