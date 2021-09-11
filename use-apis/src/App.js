import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { SignUp } from './components/SignUp';

function App() {
  const [isShowLogin, setShowLogin] = useState(false)
  const [isShowHome, setShowHome] = useState(false)
  const [username , setUsername] = useState()
  /******************* 
    @Purpose : initial rendering
    @Parameter : {}
    @Author : DARSH
    ******************/
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setShowHome(true)
      setShowLogin(false) 
    }
  },[])

  const sendUsername=val=>{
    setUsername(val)
  }

  return (
    <div className="App">
      {(!isShowHome && !isShowLogin) && <SignUp setShowLogin={setShowLogin}/>}
      {isShowLogin && <Login setShowLogin={setShowLogin} setShowHome={setShowHome} sendUsername={sendUsername}/>}
      {isShowHome && <Home setShowHome={setShowHome} setShowLogin={setShowLogin} username={username}/>}
    </div>
  );
}

export default App;
