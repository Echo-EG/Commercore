import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPaymentAndShipping} from "./types";

export const sendPaymentAndShippingAsync = createAsyncThunk<IPaymentAndShipping, {paymentAndShipingDetail: IPaymentAndShipping}>(
    'paymentAndShippingAsync',
    async (payload):Promise<any> =>{
        const response = await fetch('http://localhost:8080/api/import', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload.paymentAndShipingDetail)
        })
        if (response.ok){
            return await response.json();
        }
    }
)


const paymentAndShippingSlice = createSlice({
    name: "paymentAndShippingSlice",
    initialState:{

    } as IPaymentAndShipping,
    reducers:{

    },
    extraReducers:(builder) =>{
        builder.addCase(sendPaymentAndShippingAsync.fulfilled, (state, action) =>{
            return action.payload;
        })
    }
})

export default paymentAndShippingSlice.reducer;