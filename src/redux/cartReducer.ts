import { createSlice } from "@reduxjs/toolkit";

type ProductsInCart = {
    [id: number]: number
}

export const initialState:ProductsInCart = {
    1: 3,
    2: 3,
}

export const cartSlice = createSlice({
    name:"productsInCart",
    initialState,
    reducers:{}
})

export default cartSlice.reducer