import React, { useEffect, useState } from 'react'
import useApi from '../Hooks/use-api'

export default function UpdatePassword({setIsUpdate}) {
    const [username , setUsername]= useState({})

    const {isLoading, Err, handleApi:fetchAData} =useApi();
    const {isLoading: isUpdating, Err: Error , handleApi: updateAPI}= useApi()
    
    /******************* 
     @Purpose : get mathod for fetching single data for update
     @Parameter : {}
     @Author : DARSH
    ******************/
    useEffect(()=>{  
        let pathData = localStorage.getItem('auth');
        fetchAData({url:`http://localhost:3000/users/${pathData}`,}, setUsername)
    },[fetchAData])

    
    /******************* 
    @Purpose : submit handler and update api
    @Parameter : {e}
    @Author : DARSH
    ******************/
    const updatePassHandler=e=>{
        e.preventDefault()

        const {usernameUp, passwordUp}= e.target.elements;

        if(passwordUp.value.trim().length===0){
            return
        }

        const updatedObj = {
            username: usernameUp.value,
            password: passwordUp.value
        }

        const extraFun = ()=>{
            setIsUpdate(false)
            alert("value updated!!")
        }

        let pathData = localStorage.getItem('auth');
        updateAPI({
            url:`http://localhost:3000/users/${pathData}`,
            method: 'PUT',
            headers:'application/json',
            body: updatedObj
        }, extraFun)
    }

    return (
        <div>
            <h3>{isLoading? 'Plese Wait...': 'Update Your Password Here'}</h3>
            <h2 style={{color:'red'}}>{Err}</h2>
            <h2 style={{color:'red'}}>{Error}</h2>
            <form style={{backgroundColor: 'orange'}} onSubmit={updatePassHandler} >
                <input type="text" id="usernameUp" value={isLoading? 'fetching Username...' : username.username} disabled/> <br /><br />
                <input type="password" id="passwordUp" placeholder="Set New Password" /><br /><br />
                <input type="submit" value={isUpdating ? "Updating...":"Update Password"} /> &nbsp;
                <input type="button" value="close" onClick={()=>{setIsUpdate(false)}}/> &nbsp;
            </form>
        </div>
    )
}
