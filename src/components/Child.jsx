import { useState } from "react"


function Child({parentState,dataFromChildFn,inputFromChildFn}) {
    const [childState,setChildState]=useState("child state")
    const handleClick=()=>{
        dataFromChildFn(childState)
    }

    const [inputValue,setInpunValue]=useState("a")
  return (
    <div>
       <h3>Child</h3> 
       <div>{parentState}</div>
       <button onClick={handleClick}>Click</button>
       <div>
        <input type="text" value={inputValue} onChange={event=>setInpunValue(event.target.value)} />
       </div>
       <button onClick={inputFromChildFn()}>Click2</button>
        </div>
  )
}

export default Child