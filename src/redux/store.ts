import {configureStore} from "@reduxjs/toolkit";
import productSliceReducer from "./productSlice";
import {IPaymentAndShipping, IProduct} from "./types";
import paymentAndShippingReducer from "./paymentAndShipping";
import selectedProductSliceReducer from "./selectedProductSlice";

export interface RootState{
    product: IProduct[],
    paymentAndShipping: IPaymentAndShipping,
    selectedProduct:IProduct
}

export default configureStore({
    reducer:{
        product: productSliceReducer,
        paymentAndShipping: paymentAndShippingReducer,
        selectedProduct: selectedProductSliceReducer
    }
})