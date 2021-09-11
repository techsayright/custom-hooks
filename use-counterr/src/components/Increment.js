import React from 'react'
import useCounter from '../Hooks/use-counter'

export default function Increment() {
    // const [incVal , setIncVal] = useState(0)

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setIncVal((pre)=>pre + 1)
    //     },2000)
    // },[])

    const incVal = useCounter(0);

    return (
        <div>
            <h1>Increment : {incVal}</h1>
        </div>
    )
}
