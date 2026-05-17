import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./form.css"
function SignUp({addUser}) {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [mobile, setMobile] = useState('');
const [address, setAddress] = useState('');

const navigate = useNavigate()

const handleSubmit =(e)=>{
  e.preventDefault();
 const success =  addUser({name,email,password,mobile,address});
 if(success){
setName('')
  setEmail('')
  setPassword('')
  setMobile('')
  setAddress('')

  navigate("/signIn")
 } 
 
 
}

  return (

    <div className="auth-page">

<div className="auth-card">

<div className="auth-logo">
   <h1>Cartify</h1>
</div>

<h2>Create Account</h2>

<p className="subtitle">
   Start your shopping journey today
</p>

    
       
           
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
<label htmlFor="" >Name</label>
<input type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}  required/>
        </div>
      
<div className='input-group'>
<label htmlFor=""  >Email</label>
<input type="email" name="" id="" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
</div>


<div className='input-group'>
<label htmlFor="">Password</label>
<input type="password" placeholder="Create a password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
</div>

<div className='input-group'>
<label htmlFor="">Mobile No.</label>
<input type="number"  placeholder="Enter your mobile number" value={mobile} onChange={(e)=> setMobile(e.target.value)} required/>
</div>

<div className='input-group'>
<label htmlFor="">Address</label>
<textarea name="" id=""   placeholder="Enter your full address" rows="3" value={address} onChange={(e)=> setAddress(e.target.value)}></textarea>
</div>

<button type='submit' className="submit-btn">SignUp</button>
      </form>


<div className='auth-footer'>
  <p>Already User Plase signIn</p>
  <Link to="/signIn">SignIn</Link>
</div>
    </div>
    </div>
  )
}

export default SignUp