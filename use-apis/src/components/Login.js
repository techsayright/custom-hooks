import React, { useEffect, useState } from 'react'
import useApi from '../Hooks/use-api'
import './css/Form.css'

export default function Login({setShowLogin, setShowHome ,sendUsername}) {

    const [data ,setData] = useState()

    const {isLoading , Err , handleApi: fetchData} =useApi();

    /******************* 
    @Purpose : get method api call when page render initially
    @Parameter : {}
    @Author : DARSH
    ******************/
    useEffect(()=>{
        fetchData({url:"http://localhost:3000/users"} ,setData)
    }, [fetchData])
    
    /******************* 
    @Purpose : main login handler
    @Parameter : {}
    @Author : DARSH
    ******************/
    const onLogin=e=>{

        e.preventDefault()

        const {usernameLg,passwordLg} = e.target.elements;

        let isAuth =false
        data.forEach((val)=>{
            if(usernameLg.value===val.username && passwordLg.value===val.password){
                isAuth=true
                setShowLogin(false)
                setShowHome(true)

                localStorage.setItem("auth", val.id );
            }
            if(isAuth){
                return
            }
            else{
                isAuth=false
            }
        })

        if(isAuth){
            console.log("authenticated");
            sendUsername(usernameLg.value)

        }else{
            console.log("fake user");
        }


    }


    return (
        <div>
            <h3>{isLoading? 'Please Wait..': 'Login Here'}</h3>
            <h4 style={{color:'red'}}>{Err}</h4>
            <form style={{backgroundColor: 'pink'}} onSubmit={onLogin}>
                <input type="text" id="usernameLg" placeholder="Your UserName" /><br /><br />
                <input type="password" id="passwordLg" placeholder="Your Password" /><br /><br />
                <input type="submit" value="Login" /> <br /><br />
                <h4 onClick={()=>{setShowLogin(false)}} >not Signup yet Click here</h4>
            </form>
        </div>
    )
}
