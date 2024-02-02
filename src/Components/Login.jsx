import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';
 

function Login() {

    const [username, serUsername]= useState('');
    const [password, serpassword]= useState('');
   const {setUser} =useContext(UserContext);
    const handleSubmit= (event)=>{
            event.preventDefault()
            setUser({username,password})
    }

  return (
    <div>
      <h1>Login</h1>
      <input type='text' style={{borderRadius:"rounded"}}
       value={username}
       onChange={(e)=>serUsername(e.target.value)}
      placeholder='User Name'/>
      <br/>
      <br/>
      <input type='text' 
      value={password}
       onChange={(e)=>serpassword(e.target.value)}
      placeholder='Password'/>
      <br/>
      <br/>

      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default Login