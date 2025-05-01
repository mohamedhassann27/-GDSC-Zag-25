import { createContext, useState } from "react"
import ComponentB from "./ComponentB"

export const UserContext= createContext()
function ComponentA(){
    let [user,setUser]=useState("Mohamed")
    return(
        <div className="box">
            <h2>Component-A</h2>
            <p>Hello {user}</p>
            <UserContext.Provider value={user}>
                <ComponentB></ComponentB>
            </UserContext.Provider>
        </div>
    )
}
export default ComponentA