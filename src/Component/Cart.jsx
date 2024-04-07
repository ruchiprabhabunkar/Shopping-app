import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { remove,addition,subtraction} from '../Slice/CartSlice'
import './Product.css'
function Cart() {
     const dispatch= useDispatch()
     const cartItem=useSelector((state)=>state.cart)
    //  const count=useSelector((state)=>state.cart.value)
     
     return(
    <div className='cart'>
     {cartItem.cart.map((val,idx)=>(
          <ul className='cartItem' key={idx}>
                <li> <img src={val.image} alt=""/></li>
                <li><h3>Title:{' '}{val.title}</h3></li>
                <li><h3>Price:{' '}{val.price}*{cartItem.cart.length}</h3></li>
                {/* <li><h3>Price:{' '}{val.price}*{count}={val.price*count}</h3>
                <button id='plus' onClick={()=>dispatch(addition())}>+</button> <button onClick={()=>dispatch(subtraction())} id='minus'>-</button> </li>  */}
                <li><button onClick={(e)=>dispatch(remove(val.id))} >Remove</button></li> 
        </ul>
     ))} 
     
    </div>
  )
}

export default Cart
