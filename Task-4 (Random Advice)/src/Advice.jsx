import "./Advice.css"
import { useState,useEffect } from "react"

function Advice(){
    let [advice,setAdvice]=useState({})

    const fetchAdvice= ()=>{
        fetch("https://api.adviceslip.com/advice")
        .then((response)=>response.json())
        .then((data)=>{
            setAdvice(data.slip)
        })
    }
    
    useEffect(()=>{
        fetchAdvice();
    },[])

    return(
        <div className="Advice">
            <h4><span>ADVICE </span> {"#"+advice.id}</h4>
            <h2>"{advice.advice}"</h2>
            <img className="divider" src="./src/assets/pattern-divider-desktop.svg" alt="divider" />
            <img onClick={fetchAdvice} src="../src/assets/icon-dice.svg" alt="icon" className="icon"/>
        </div>
    )
}
export default Advice