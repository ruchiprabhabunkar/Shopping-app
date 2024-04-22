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
