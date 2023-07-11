import { createContext, useState } from "react";


export const CounterContext = createContext({} as any)



type ContextProps = {
    children: React.ReactNode
}
const CounterProvider = ({ children }: ContextProps) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    )

}
export default CounterProvider;