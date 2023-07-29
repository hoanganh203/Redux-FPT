import { RootState } from '@/Store/store'
import { decrement, increPlay, increment } from '@/slices/counter'
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {
    const dispatch = useDispatch()
    const { count } = useSelector((state: RootState) => state.counter)

    return (
        <div >
            <h1 className='text-center'> count : {count} </h1>
            <button className='text-white px-4 py-2 bg-slate-400' onClick={() => dispatch(increment(1))} >Tăng</button>
            <button className='text-white px-4 py-2 bg-gray-600' onClick={() => dispatch(decrement(1))}>Giảm</button>
            <button className='text-white px-4 py-2 bg-gray-600' onClick={() => dispatch(increPlay(10))}>increPlay</button>
        </div>
    )
}

export default Counter