import { useState } from "react"
import Child from "./Child"


function Parent() {

    const [parentState]=useState("parent state")
    const[state,setState]=useState(text)
    const [inputValue,setInpunValue]=useState("")

    const inputFromChildFn=(stateFromInput)=>{
        setInpunValue (stateFromInput)
    }

    const dataFromChildFn=(stateFromChild)=>{
        setState(stateFromChild)
    }
    

    
  return (
    <div>
    <h2>Parent</h2>
    <Child parentState={parentState} dataFromChildFn={dataFromChildFn}inputFromChildFn={inputFromChildFn}/>
    <h1>inputValue</h1>
    </div>

  )
}

export default Parent
