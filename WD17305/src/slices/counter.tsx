import { PayloadAction, createSlice } from "@reduxjs/toolkit"


const initialState: any = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.count++;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.count--;
        },
        increPlay: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    }
})

export const { increment, decrement, increPlay } = counterSlice.actions
export const counterReducer = counterSlice.reducer