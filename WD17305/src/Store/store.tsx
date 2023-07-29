import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import couterReducer from '../Reducer/couterReducer';
import productReducer from '../Reducer/productReducer';

import { useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from '@/slices/counter';
import { productsReducer } from '@/slices/product';
import { cartsReducer } from '@/slices/carts';



const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productsReducer,
        carts: cartsReducer
    }
    // product: productReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;