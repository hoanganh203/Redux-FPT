import { createContext, useReducer, useState } from "react";


export const CounterContext = createContext({} as any)



type ReducerProps = {
    children: React.ReactNode
}

const initialState = {
    count: 0
}




const rudecer = (state: any, action: any) => {
    switch (action.type) {
        case "Increment":
            return {
                count: state.count + 1
            }
        case "Decrement":
            return {
                count: state.count - 1
            }

        default:
            return state
    }

}

const CounterProvider = ({ children }: ReducerProps) => {
    const [state, dispatch] = useReducer(rudecer, initialState)
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )

}
export default CounterProvider;