import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 export const  fetchapi=createAsyncThunk("fetchapi",async()=>{
    const response=await fetch("https://fakestoreapi.com/products");
    return response.json();
})

const ProductSlice=createSlice({
name:"Products",
initialState:{
    isLoading:false,
    data:null,
    isError:false
},
extraReducers: (builder)=>{
    builder.addCase(fetchapi.pending,(state)=>{
        state.isLoading=true
    });

    builder.addCase(fetchapi.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.data=action.payload;
    });
        
    builder.addCase(fetchapi.rejected,(state,action)=>{
        console.log("error",action.payload);
        state.isError=true;
    })
    
    }

})
export default ProductSlice.reducer