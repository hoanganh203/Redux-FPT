import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const getProductsApi = createAsyncThunk(
    'product/getProductsApi',
    async () => {
        try {
            const response = await axios.get(`http://localhost:3000/products`)
            return response.data

        } catch (error: any) {
            return error.message
        }
    }
)

export const addProductsApi = createAsyncThunk(
    'product/addProductsApi',
    async (body: any) => {
        try {
            const response = await axios.post(`http://localhost:3000/products`, body)
            return response.data
        } catch (error: any) {
            return error.message
        }
    }
)

export const deleteProductApi = createAsyncThunk(
    'product/deleteProductApi',
    async (id: number) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`)
            return id
        } catch (error: any) {
            return error.message
        }
    }
)

export const updateProductApi = createAsyncThunk(
    'product/updateProductApi',
    async (data: any) => {
        try {
            const response = await axios.put(`http://localhost:3000/products/${data.id}`, data)
            return response.data
        } catch (error: any) {
            return error.message
        }
    }
)

