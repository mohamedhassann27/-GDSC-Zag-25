import { useContext } from "react"
import { UserContext } from "./ComponentA"

function ComponentD(){
    const user=useContext(UserContext)
    return(
        <div className="box">
            <h2>Component-D</h2>
            <p>Bye {user}</p>
        </div>
    )
}
export default ComponentD