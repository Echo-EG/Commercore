import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "./types";
import {getProductsAsync} from "./productSlice";

const selectedProductSlice = createSlice({
    name: 'selectedProduct',
    initialState:{} as IProduct,
    reducers:{
        selectedAction: (state, action) =>{

            return action.payload

        }
    },
    // extraReducers: (builder) =>{
    //     builder.addCase(getProductsAsync.fulfilled, (state: IProduct[], action:PayloadAction<any>) =>{
    //         return action.payload;
    //     })
    // }

})
export const {selectedAction} = selectedProductSlice.actions;
export default selectedProductSlice.reducer;