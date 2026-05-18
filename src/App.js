import {  Routes,Route} from 'react-router-dom'
import Product from "./Component/Product";
import Cart from "./Component/Cart"
import Header from './Component/Header';
import SignUp from './Component/SignUp';
import { useEffect, useState } from 'react';
import SignIn from './Component/SignIn';
import { useDispatch } from 'react-redux';
import { clearAll } from './Slice/CartSlice';
function App() {

    const [signupUsers, setSignupUsers] = useState(JSON.parse(localStorage.getItem("SignupUser")) || [])
const [signInUsers, setSignInUsers] = useState(JSON.parse(localStorage.getItem("SignInUser")) || null)

 useEffect(()=>{
    localStorage.setItem("SignupUser", JSON.stringify(signupUsers))  
 },[signupUsers])


 useEffect(()=>{
   localStorage.setItem("SignInUser", JSON.stringify(signInUsers))
    
 },[signInUsers])


const addUser =(signupUser)=>{

const alreadyUser = signupUsers.find((user)=> user.email.toLowerCase() === signupUser.email.toLowerCase());
if(alreadyUser){
    alert("Email already registered. Please Sigin")
    return false;
}
 setSignupUsers([...signupUsers, signupUser]);
  alert("SignUp Successfull")
  return true

}

const addLoginUser = (siginUser)=>{
  
    setSignInUsers(siginUser)
}


const dispatch = useDispatch();

const logout =()=>{
setSignInUsers(null)
localStorage.removeItem("SignInUser")
dispatch(clearAll())
}



    return(

    <div className="App">  
    
    <Header signInUsers = {signInUsers}  logout={logout}  />
    <Routes>
    <Route path='/' element={<Product  signInUsers = {signInUsers}/>}/>
    <Route path='/cart' element={<Cart  signInUsers = {signInUsers}/>}/>
    <Route path='/signUp' element={<SignUp  addUser={addUser} />}/>
    <Route path='/signIn' element={<SignIn addLoginUser={addLoginUser}/>}/>
    </Routes>
    
    </div>
)
}

export default App;
