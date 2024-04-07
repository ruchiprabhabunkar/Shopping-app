import {  createSlice} from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name:"cart",
    initialState:{
      cart:[],
      // value:0,
      quantity:0,
      amount:null

    },
     reducers:{
     addToCart:(state,action)=> {
      const itemsId = state.cart.map(ele => ele.id)
      const newPayload = {...action.payload}
      newPayload['no_of_item'] = itemsId.includes(newPayload.id) ? ++newPayload['no_of_item'] : 1      
        state.cart.push(newPayload)
        console.log(state.cart.map(ele => ele))
     },
     remove:(state,action)=>{
       state.cart = state.cart.filter((ProductId)=>ProductId.id!==action.payload)
     },
     clearAll:(state)=>{
      state.cart=[];
     },
     addition:(state)=>{
      state.value+=1
     },
     subtraction:(state)=>{
      state.value-=1
     }
    }
})
export default CartSlice.reducer ;
export const {addToCart,remove,clearAll,addition,subtraction} = CartSlice.actions