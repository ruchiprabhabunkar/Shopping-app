// import {  createSlice} from "@reduxjs/toolkit";
// const CartSlice = createSlice({
//     name:"cart",
//     initialState:{
//       cart:[],
//       quantity:1,
//       amount:null
//     },

//      reducers:{
//       addToCart(state, action) {
//       const existItem = state.cart.findIndex(item => item.id === action.payload.id);
//        if (existItem !== -1) {
//         state.cart[existItem].quantity += 1; 
//         } 
//    else {
//      state.cart.push({ ...action.payload, });
//     }
//   },
    
//   remove:(state,action)=>{
//        state.cart = state.cart.filter((ProductId)=>ProductId.id!==action.payload)
//        state.quantity-=1
//      },
//      clearAll:(state)=>{
//       state.cart=[];
//      },
//      addition:(state,action)=>{
//       const itemIndex = state.cart.findIndex(item => item.id === action.payload);
//      if(itemIndex!==-1 ){
//      state.cart[itemIndex].quantity+=1
//       }
//      },

//      subtraction:(state)=>{
//       if(state.quantity>0){
//         state.quantity-=1
//       }
    
//      }
//     }
// })
// export default CartSlice.reducer ;
// export const {addToCart,remove,clearAll,addition,subtraction} = CartSlice.actions
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const existItem = state.cart.findIndex(item => item.id === action.payload.id);
      if (existItem !== -1) {
        return
      } else {
        state.cart.push({ ...action.payload ,quantity:1 });
      }
      state.quantity += 1;
    },
    remove(state, action) {
      const removedItem = state.cart.find(item => item.id === action.payload);
      if (removedItem) {
        state.quantity -= removedItem.quantity; 
        state.cart = state.cart.filter(item => item.id !== action.payload);
      }
    },
    clearAll(state) {
      state.cart = [];
      state.quantity = 0;
    },

    addition(state, action) {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1){
        state.cart[itemIndex].quantity += 1;
        state.quantity += 1;
      }
    },
    subtraction(state,action) {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload);
      if (itemIndex!==-1 && state.cart[itemIndex].quantity>1) {
        state.cart[itemIndex].quantity -= 1;
      }
    }
  }
});

export default CartSlice.reducer;
export const { addToCart, remove, clearAll, addition, subtraction } = CartSlice.actions;
