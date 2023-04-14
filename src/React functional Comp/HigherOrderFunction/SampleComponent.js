
function SampleComponent (){
    return  (
        <h1>Hi I am Sample Compoennt</h1>        
    )}

    const hocfunction =(Data)=>{
        return (
            ()=> (
                <div style={{backgroundColor:"red" , padding:"40 px"}}>
                <Data/>
                </div>
            ))}
        const HocofSamplecomponent=hocfunction(SampleComponent);
        export {HocofSamplecomponent};
        export default SampleComponent;