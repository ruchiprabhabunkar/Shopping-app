import React from 'react'
import './Product.css'
import {  Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
function Header() {
    const item=useSelector((state)=>state.cart)
  return (
       <div>
       <nav>
        <ul className="header">
        <li>
        <Link to="/" >Products</Link>
        </li>
         <li>   
     <Link to="/Cart" >Cart:{item.cart.length}</Link> 
        </li>
        </ul>   
    </nav>
   
    </div>
  )
}

export default Header
