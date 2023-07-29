import { addProductsApi, deleteProductApi, getProductsApi, updateProductApi } from "@/actionApiThunk/product"
import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>
type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

const initialState: any = {
    products: [],
    isLoading: false,
    error: "",
    carts: [],
    total: 0
}


const productSlice = createSlice({
    name: "product",
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

    }, extraReducers: (builder) => {
        builder.addCase(getProductsApi.fulfilled, (state, action) => {
            state.products = action.payload
        }).addCase(addProductsApi.fulfilled, (state, action) => {
            state.products.push(action.payload)
        }).addCase(deleteProductApi.fulfilled, (state, action) => {
            const id = action.payload
            state.products = state.products.filter((p: any) => p.id !== id)
        }).addCase(updateProductApi.fulfilled, (state, action) => {
            const newData = action.payload
            state.products = state.products.map((item: any) => item.id === newData.id ? newData : item)
        })


            .addMatcher<PendingAction>( //lấy ra các trang thái bắt đầu hay kết thúc của action
                (action) => action.type.endsWith('/pending'),
                (state, action) => {
                    state.isLoading = true
                }
            ).addMatcher<RejectedAction>(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoading = false

                }
            ).addMatcher<FulfilledAction>(
                (action) => action.type.endsWith('/fulfilled'),
                (state, action) => {
                    state.isLoading = false
                }
            )
    },
})

export const { addToCart, inCrement, deCrement, deleteCarts } = productSlice.actions
export const productsReducer = productSlice.reducer
