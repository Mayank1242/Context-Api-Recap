import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} =useContext(UserContext);
    if(!user){
        return <div>
        <h3>Please Login</h3>
        </div>
    } 

  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <h2>Your Password is {user.password}</h2>
    </div>
  )
}

export default Profile