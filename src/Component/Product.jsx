import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchapi} from '../Slice/ProductSlice'
import "./Product.css"
import { addToCart } from '../Slice/CartSlice';
function Product() {

  const[filter,setFilter]=useState('')
  
  const[edit,setEdit]=useState(false)

  const dispatch = useDispatch()
  const product=useSelector((state)=>state.product)

useEffect(()=>{
   dispatch(fetchapi()) 
 },[dispatch])
 
 const cartProduct=(val)=>{
  dispatch(addToCart(val))
  setEdit(true)
 }
const filterProduct=(cat)=>{
const updateList=product.data.filter((val)=>val.category === cat)
setFilter(updateList)
}
return (
    <div>
      <div className='category'>
      <button onClick={()=>setFilter(product.data)}>All</button>
        <button onClick= { ()=>filterProduct("women's clothing")} >Women's wear</button>
      <button onClick={()=>filterProduct("men's clothing")}>Men's wear</button>
      <button onClick={ ()=>filterProduct( "electronics")}>Electronics</button>
      <button onClick={()=>{filterProduct("jewelery")}}>Jwellery</button>
      </div>
    <div>
       { filter ? ( <div className='main_div'>{filter && filter.map((val,idx)=>(
                <div className='detail' key={idx}>
                <img src={val.image} alt=""/>
                <h3>Title:{val.title}</h3>
                <h3>Price:{val.price}</h3>
                <h3>Category:{val.category}</h3>
                <button id='btns'  onClick={()=>{cartProduct(val)}}>Add to Cart</button>
            </div>
          ))
    }</div>):(<div className='main_div'>{product.data && product.data.map((val,idx)=>(
      <div className='detail' key={idx}>
      <img src={val.image} alt=""/>
      <h3>Title:{val.title}</h3>
      <h3>Price:{val.price}</h3>
      <h3>Category:{val.category}</h3>
     <button id='btns'  onClick={()=>{cartProduct(val)}}>Add to Cart</button>
  </div>
))
}</div>)}
  
     </div>
     </div>
  )
}

export default Product
