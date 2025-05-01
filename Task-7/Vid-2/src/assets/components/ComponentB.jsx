import ComponentC from "./ComponentC"
function ComponentB(){
    return(
        <div className="box">
            <h2>Component-B</h2>
            <ComponentC></ComponentC>
        </div>
    )
}
export default ComponentB