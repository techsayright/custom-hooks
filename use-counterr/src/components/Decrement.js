import React from 'react'
import useCounter from '../Hooks/use-counter'

export default function Decrement() {
    // const [decVal , setDecVal] = useState(100)

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setDecVal((pre)=>pre - 1)
    //     },2000)
    // },[])

    const decVal = useCounter(150, false)

    return (
        <div>
            <h1>Decrement : {decVal}</h1>
        </div>
    )
}
