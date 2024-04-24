import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addition, clearAll, remove, subtraction } from '../Slice/CartSlice';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
    <div className='cart'>
      {cartItems.length === 0 ? (
        <div>
          <h1>Your cart is empty</h1>
          <div className='link'><Link to="/">Start's shopping</Link></div> 
        </div>
      ) : (
        <div>
          <h1>Shopping Cart</h1>
          <div className='cart-header '>
            <li><h4>PRODUCTS</h4></li>
            <li><h4>PRICE</h4></li>
            <li><h4>QUANTITY</h4></li>
            <li><h4>TOTAL</h4></li>
            </div> 
            <div className='Cart'>
          {cartItems.map(item => (
               <ul className='cartItem' key={item.id}> 
               <div className='Product'>
               <li id='product-id'><img src={item.image} alt=""/></li>
               <li id='product-id'><h3> {item.title}</h3>
               <button className='remove' onClick={() => dispatch(remove(item.id))}>Remove </button></li>
               </div>
               <li>
                <h3>Rs{item.price} </h3></li>
                <li>
                <div className='quantity cartItem'>
                <button onClick={() => dispatch(subtraction(item.id))}>-</button> 
                <h3>{item.quantity} </h3> 
                <button onClick={() => dispatch(addition(item.id))}>+</button>
                </div>
             </li>
             <li><h3>Rs.{item.price*item.quantity} </h3></li>
            </ul>
          ))}</div>
          <button className='clear' onClick={(e)=>dispatch(clearAll())}>Clear Cart</button>
          <div className='subtotal'>
          <h4>Subtotal:Rs.{Math.round(totalAmount)} </h4>
          </div>
        </div>
      )}
      
    </div>
    
  );
}

export default Cart;
