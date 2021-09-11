import { useCallback, useState } from 'react'

export default function useApi() {

    const [isLoading , setIsLoading] = useState(false)
    const [Err , setErr] = useState(null)

    const handleApi =useCallback(async(apiDataObj , extraFun)=>{
        setIsLoading(true)
        setErr(null)
        
        try{
            let response = await fetch(apiDataObj.url, {
                method: apiDataObj.method || 'GET',
                headers: {
                    'Accept' : apiDataObj.headers || {},
                    'Content-Type': apiDataObj.headers || {}
                },
                body: apiDataObj.body ? JSON.stringify(apiDataObj.body) : null
            })
            if(!(response.ok)){
                throw new Error("Something went wrong!!")
            }
            response =await response.json()
        
            extraFun(response)

        }catch(err){
            setIsLoading(false)
            setErr(err.message)
        }
        setIsLoading(false)
        
    },[])
 
    return {
        isLoading,
        Err,
        handleApi
    }
}
