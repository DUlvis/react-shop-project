import { createSlice } from '@reduxjs/toolkit'

type ProductsInCart = {
    [id: number]: number
}

export const initialState: ProductsInCart = {
    3: 3,
    4: 3,
}

export const cartSlice = createSlice({
    name: 'productsInCart',
    initialState,
    reducers: {
        addProductToCartss: (prevState, action) => ({
            ...prevState,
            [action.payload]:
                (prevState[action.payload] || 0) + action.payload.count,
        }),

        // removeProductFromCart :(prevState, action) => omit(prevState, [action.payload]))

        changeProductQuantity: (prevState, action) => ({
            ...prevState,
            [action.payload]: action.payload.count,
        }),
    },
})

export const { addProductToCartss } = cartSlice.actions

export default cartSlice.reducer
