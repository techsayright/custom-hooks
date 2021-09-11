import React, { useEffect, useState } from 'react'
import useApi from '../Hooks/use-api';

export const SignUp = ({setShowLogin}) => {

    const {isLoading, Err, handleApi:sendDataToJson}= useApi();
    const [data ,setData] = useState()
    const [isUsernameExist, setIsUsernameExist]= useState(false)

    const {isLoading:isGettng , Err:Error , handleApi: fetchData} =useApi();

    /******************* 
    @Purpose : get method api call when page render initially
    @Parameter : {}
    @Author : DARSH
    ******************/
    useEffect(()=>{
        fetchData({url:"http://localhost:3000/users"} ,setData)
    }, [fetchData])
    
    /******************* 
    @Purpose : username Exist or not Checker
    @Parameter : {}
    @Author : DARSH
    ******************/
    const userExist = e=>{
        
        let isExist =false
        data.forEach((value)=>{
            if(e.target.value===value.username){
                isExist=true
            }
            if(isExist){
                setIsUsernameExist(true)
                console.log("exist");
                return
            }
            else{
                setIsUsernameExist(false)
                console.log("not");
                isExist=false
            }
        })

    }

    /******************* 
    @Purpose : main signup handler and post api using custom hook
    @Parameter : {event}
    @Author : DARSH
    ******************/
    const formHandler=event=>{
        event.preventDefault();

        const {username, password}= event.target.elements;

        let usernameVal = username.value;
        let passwordVal = password.value;

        if(usernameVal.trim().length===0 || passwordVal.trim().length===0){
            return false
        }

        const data={
            username: usernameVal,
            password: passwordVal
        }

        const extraFun =()=>{
            alert("Data Added into JSON");
            alert("Plase Login through given Link")
            
            username.value=""
            password.value=""

            fetchData({url:"http://localhost:3000/users"} ,setData)

        }
        
        sendDataToJson({ 
            url:"http://localhost:3000/users",
            method: "POST",
            headers: "application/json",
            body: data
        }, extraFun);

    }

    return (
        <div>
            <h3>{isGettng? "Please Wait...":"SignUp Form"}</h3>
            <form onSubmit={formHandler}>
                <h3 style={{color:'red'}}>{Err}</h3>
                <h3 style={{color:'red'}}>{Error}</h3>
                <h2 style={{color:'red'}}>{isUsernameExist ? 'This Username is already exist...please! enter another' : 'username should be unique*'}</h2>
                <input type="text" id="username" placeholder="Enter New UserName" onBlur={userExist}/> <br /><br />
                <input type="password" id="password" placeholder="Create Password" /><br /><br />
                <input type="submit" value={isLoading ? 'Sending..' : 'SignUp'} disabled={isUsernameExist} /> <br /><br />
                <h4 onClick={()=>{setShowLogin(true)}} >Already Signed up click Here for Login</h4>
            </form>
        </div>
    )
}
