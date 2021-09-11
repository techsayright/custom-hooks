import React, { useState } from 'react'
import usePrevious from '../Hooks/use-previous'

export default function Counter() {
    const [val, setVal] = useState(0)
    
    // const preRef = useRef()

    // useEffect(()=>{
    //     preRef.current = val
    // })

    // const preVal = preRef.current

    const preVal = usePrevious(val)

    return (
        <div>
            <h1>Current Value: {val}</h1>
            <h1>Previous Value: {preVal}</h1>
            <button onClick={()=>{setVal(Math.round(Math.random()*100))}}>Get Random Value</button>
        </div>
    )
}
