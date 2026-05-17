import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./form.css"
export default function SignIn({addLoginUser}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const navigate = useNavigate()
  

const handleSubmit =(e)=>{
        e.preventDefault()
      const users = JSON.parse(localStorage.getItem("SignupUser")) || [];
      const matchedUser = users.find(
        (user)=> email=== user.email && password === user.password
      );
    
         if(matchedUser){
              addLoginUser(matchedUser)
              setEmail('')
              setPassword('')
              alert("login successfull")
              navigate("/")

        } else{
            alert("You are not register please signup ")
            navigate("/signUp")
        } 

    }


  return (
    <div className='auth-page'>

  

    <div className='auth-card'>
        <h2>Sign In</h2>
            <p className="subtitle">Welcome back! Please enter your details.</p>
<form action="" onSubmit={handleSubmit} >
    <div className="input-group">
        <label htmlFor="">Email</label>
    <input type="email" placeholder="Enter your email" name="" id="" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
    </div>

     <div className="input-group">
         <label htmlFor="">Password</label>
    <input type="password" placeholder="Enter your password"  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
    </div>
   
    <button type='submit'  className="submit-btn">SignIn</button>
</form>
<div className='auth-footer'>
    <p>New User Please SignUp</p>
    <Link to="/signUp">SignUp</Link>
</div>

    </div>
    </div>
  )
}
