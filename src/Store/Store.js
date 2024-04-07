import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Slice/ProductSlice";
import CartSlice from "../Slice/CartSlice";
export const store=configureStore({
    reducer: {
        product:ProductSlice,
        cart:CartSlice
    }
})