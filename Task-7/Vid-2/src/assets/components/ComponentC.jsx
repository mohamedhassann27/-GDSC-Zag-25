import ComponentD from "./ComponentD"
import { UserContext } from "./ComponentA"
import { useContext } from "react"

function ComponentC(){
    const user=useContext(UserContext)
    return(
        <div className="box">
            <h2>Component-C</h2>
            <p>Hello again {user}</p>
            <ComponentD></ComponentD>
        </div>
    )
}
export default ComponentC