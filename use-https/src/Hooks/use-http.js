import { useCallback, useState } from 'react'

export default function useHttp() {

    const [isLoading , setIsLoading] = useState(false)
    const [Err , setErr] = useState(null)

    const handleApi=useCallback(async (apiDataObj, extraFunction)=>{
        setIsLoading(true)
        setErr(null)

        try{
            let res = await fetch( apiDataObj.url , {
                method: apiDataObj.method || 'GET',
                headers:{
                    'Accept': apiDataObj.accept ? apiDataObj.accept : {},
                    'Content-Type': apiDataObj.accept ? apiDataObj.accept : {}
                },
                body: apiDataObj.body ? JSON.stringify(apiDataObj.body) : null
            })
            if(!(res.ok)){
                throw new Error("Something went wrong!!")
            }

            res = await res.json()
            console.log(res);

            extraFunction(res)
        }
        catch(err){
            setErr(err.message)
            setIsLoading(false)
        }
        setIsLoading(false)
    },[])


    return {
        isLoading,
        Err,
        handleApi
    }
}
