import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type Product = {
    id: number
    name: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6'
        )

        console.log(response)
        console.log(response.data.products)
        return response.data.products
    }
)

const initialState: Product[] = []

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    },
})

export default productsSlice.reducer
