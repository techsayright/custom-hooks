import { useEffect, useState } from 'react'

export default function useCounter(initVal , forward=true) {
    const [counter , setCounter] = useState(initVal)

    useEffect(()=>{
        setInterval(()=>{
            if(forward){
                setCounter((pre)=>pre + 1)
            }else{
                setCounter((pre)=>pre - 1)
            }
        },2000)
    },[forward])

    return counter 
}
