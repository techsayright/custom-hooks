import { useEffect, useRef } from 'react'

export default function usePrevious(value) {

    const preRef = useRef()

    useEffect(()=>{
        preRef.current = value
    })
    const previousValue = preRef.current

    return previousValue;
}
