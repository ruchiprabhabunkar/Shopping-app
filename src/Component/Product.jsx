
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchapi} from '../Slice/ProductSlice'
import "./Product.css";
import { addToCart } from '../Slice/CartSlice';
import { useNavigate } from 'react-router-dom';

function Product({addUser, signInUsers}) {

  const[filter,setFilter]=useState('')

  const[edit,setEdit]=useState(false)

  const dispatch = useDispatch()

  const product = useSelector((state)=>state.product)


  useEffect(()=>{
   dispatch(fetchapi()) 
 },[dispatch])
 
const navigate = useNavigate()

 const cartProduct=(val)=>{
if(!signInUsers){
  alert("Please sigIn first");
  navigate("/signIn")
  return
}
  dispatch(addToCart(val))
  alert("Product added to cart")
  setEdit(true)
 }
const filterProduct=(cat)=>{
const updateList=product.data.filter((val)=>val.category === cat)
setFilter(updateList)
}
return (

  //filter by category 
    <>

   {/* <!-- ---------- Welcome Text ---------- --> */}
    <section class="welcome-section">
        <h1>Welcome, Shopper! 👋</h1>
        <p>Discover our latest collections and find your perfect match today.</p>
    </section>


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
        <div className='img-section'>
 <img src={val.image} alt=""/>
        </div>
     <div className='product-detail'>
 <h3>{val.title}</h3>
      <p>{val.description}</p>
      <h3 className="price">${val.price}</h3>
      <h3 className='category-tag'>{val.category}</h3>
      <div className='rating-section'>
<h3>Rating: {val.rating.rate}</h3> <p>$({val.rating.count})</p>
      </div>
        <button className='add-to-cart'  onClick={()=>{cartProduct(val)}}>Add to Cart</button>
     </div> 
  </div> ))
    }
    </div>):(
      <div className='main_div'>{product.data && product.data.map((val,idx)=>(
         <div className='detail' key={idx}>
        <div className='img-section'>
 <img src={val.image} alt=""/>
        </div>
     <div className='product-detail'>
 <h3>{val.title}</h3>
      <p>{val.description}</p>
      <h3 className="price">${val.price}</h3>
      <h3 className='category-tag'>{val.category}</h3>
      <div className='rating-section'>
<h3>Rating: {val.rating.rate}</h3> <p>$({val.rating.count})</p>
      </div>
        <button className='add-to-cart'  onClick={()=>{cartProduct(val)}}>Add to Cart</button>
     </div> 
  </div>
))
}</div>)}
  
     </div>
     </>
  )
}

export default Product
