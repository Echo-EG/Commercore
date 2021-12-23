import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "./types";


export const getProductsAsync = createAsyncThunk<IProduct>(
    'api/getProductsAsync',
    async (): Promise<any> =>{
        const response = await fetch('http://localhost:8080/api/products')
        if (response.ok){
            return await response.json();
        }
    }

)

const productSlice = createSlice({
    name:'products',
    initialState: [] as IProduct[],
    reducers:{

    },
    extraReducers: (builder) =>{
        builder.addCase(getProductsAsync.fulfilled, (state: IProduct[], action:PayloadAction<any>) =>{
            return action.payload;
        })
    }
})

export default productSlice.reducer;