import { useEffect, useState } from 'react';
import './App.css';
import FetchVal from './components/FetchVal';
import StoreVal from './components/StoreVal';
import useHttp from './Hooks/use-http';

function App() {

    const [data , setData]= useState([])
    
    const { isLoading , Err , handleApi: fetchApi} = useHttp();

    /******************* 
    @Purpose : getdata fun to pass into the fetchapi fun
    @Parameter : {}
    @Author : DARSH
    ******************/
    const getData=(res)=>{
        let tempData =[];
        for (const key in res) {
            tempData.push({
                id:key,
                city: res[key].city,
                about: res[key].about,
                pincode: res[key].pincode
            })
        }
    
        setData(tempData)
    }

    /******************* 
    @Purpose : useEffect
    @Parameter : {}
    @Author : DARSH
    ******************/
    useEffect(()=>{
       fetchApi({url: "https://react-apii-default-rtdb.firebaseio.com/city.json",}, getData)
    },[fetchApi])

    return (
      <div className="App">
        <StoreVal fetchApi={()=>{fetchApi({url: "https://react-apii-default-rtdb.firebaseio.com/city.json",}, getData)}}/>
        <FetchVal data={data} isLoading={isLoading} Err={Err} fetchApi={()=>{fetchApi({url: "https://react-apii-default-rtdb.firebaseio.com/city.json",}, getData)}}/>
      </div>
    );
}

export default App;
