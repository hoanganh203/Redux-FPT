import { createSlice } from "@reduxjs/toolkit"


const initialState: any = {

    carts: [],
    total: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const checkCart = state.carts.findIndex((item: any) => item.id === action.payload.id)
            if (checkCart < 0) {
                state.carts.push(action.payload)
                state.total += action.payload.price
            } else {
                state.carts[checkCart].quanlity++;
                const into = state.carts[checkCart].price * state.carts[checkCart].quanlity
                state.carts[checkCart].intoMoney = into
                state.total += action.payload.price
            }
        }, inCrement: (state, action) => {
            const incrementCart = state.carts.findIndex((item: any) => item.id === action.payload.id)
            state.carts[incrementCart].quanlity++;
            const intoInCrement = state.carts[incrementCart].price * state.carts[incrementCart].quanlity
            state.carts[incrementCart].intoMoney = intoInCrement
            state.total += action.payload.price
        }, deCrement: (state, action) => {
            const incrementCart = state.carts.findIndex((item: any) => item.id === action.payload.id)
            state.carts[incrementCart].quanlity--;
            const intoInCrement = state.carts[incrementCart].price * state.carts[incrementCart].quanlity
            state.carts[incrementCart].intoMoney = intoInCrement
            state.total -= action.payload.price
        }, deleteCarts: (state, action) => {
            state.carts = state.carts.filter((item: any) => item.id !== action.payload.id)
            state.total -= action.payload.intoMoney
        }

    }
})

export const { addToCart, inCrement, deCrement, deleteCarts } = cartSlice.actions
export const cartsReducer = cartSlice.reducer