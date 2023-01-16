import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import likeReducer from './likeReducer'

export const store = configureStore({
    reducer: {
        likeProducts: likeReducer,
        productsInCart: cartReducer
    },
  })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
