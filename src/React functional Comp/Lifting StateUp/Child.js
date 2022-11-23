function Child (props){
    const data="Sarwar Alam"
    return(
        <div className="App">
        <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
}
export default Child;