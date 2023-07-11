import { CounterContext } from "@/useContext"
import { useContext } from "react"

type Props = {

}

const Counter = (props: Props) => {

    const { count, increment, decrement } = useContext(CounterContext)

    return (
        <>
            count : {count}
            <button onClick={() => increment()}>Tăng</button>
            <button onClick={() => decrement()}>Giảm</button>
        </>
    )
}

export default Counter