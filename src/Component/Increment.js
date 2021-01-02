import React, { useState } from 'react'

function Increment(){
    const [count, setCount] = useState(0)
    return(
        <div>
           <h1>{count}</h1> 
           <button style={{fontSize:'2em'}} onClick={()=> setCount(count+1)}>Plus</button><br></br>
           <button style={{fontSize:'2em'}} onClick={()=> setCount(count-1)}> Minus</button>
        </div>
    )
}

export default Increment