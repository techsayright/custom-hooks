import React from 'react'
import { useState } from 'react/cjs/react.development'
import styled from 'styled-components'
import useApi from '../Hooks/use-api'
import UpdatePassword from './UpdatePassword'

const Button = styled.button`
    background-color:${props => props.delete ? 'red' : 'blue' };
    border: 1px solid black;
    padding: 1rem 1rem;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 700;

    &:hover{
        background-color: ${props => props.update ? 'red' : '#0000ffae'};
    }
`

export default function Home({setShowLogin ,setShowHome ,username}) {

    const [isUpdate, setIsUpdate] = useState(false)

    const {isLoading , Err , handleApi: deleteApi}=useApi();
    
    /******************* 
    @Purpose : button handler for logout
    @Parameter : {}
    @Author : DARSH
    ******************/
    const btnHandler =()=>{
        setShowLogin(true)
        setShowHome(false)

        localStorage.removeItem('auth')
    }

    /******************* 
    @Purpose : delete mathod api call for deleteing
    @Parameter : {}
    @Author : DARSH
    ******************/
    const deleteBtnHandler=()=>{
        let pathVal = localStorage.getItem('auth');

        const extraFun =()=>{
            alert("You are now removed from our db");
            btnHandler()
        }

        deleteApi({
            url:`http://localhost:3000/users/${pathVal}`,
            method: "DELETE"
        }, extraFun)
    }

    return (
        <div>
            <h1>Hello, {username}</h1>
            <h2 style={{color: 'red'}}>{Err}</h2>
            <Button onClick={btnHandler}>Logout</Button> &nbsp;
            <Button delete  onClick={deleteBtnHandler}>{isLoading ? 'Deleting..' : 'Delete My Account'}</Button> <br /><br />
            <Button update onClick={()=>setIsUpdate(true)}>Update my Password</Button>

            {isUpdate && <UpdatePassword setIsUpdate={setIsUpdate}/>}
        </div>
    )
}
