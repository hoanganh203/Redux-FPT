import { produce } from "immer";


const initialState: any = {
    items: [],
    total: 0
}


const cartsReducer = (state = initialState, action: any) => {
    return produce(state, (cartState: any) => {

        switch (action.type) {
            case "cart/addCart":
                const checkCart = cartState.items.findIndex((item: any) => item.id === action.payload.id)
                if (checkCart < 0) {
                    cartState.items.push(action.payload)
                    cartState.total += action.payload.price
                } else {
                    cartState.items[checkCart].quanlity++;
                    const into = cartState.items[checkCart].price * cartState.items[checkCart].quanlity
                    cartState.items[checkCart].intoMoney = into
                    cartState.total += action.payload.price
                }
                break;

            case "cart/inCrement":
                const incrementCart = cartState.items.findIndex((item: any) => item.id === action.payload.id)
                cartState.items[incrementCart].quanlity++;
                const intoInCrement = cartState.items[incrementCart].price * cartState.items[incrementCart].quanlity
                cartState.items[incrementCart].intoMoney = intoInCrement
                cartState.total += action.payload.price
                break;

            case "cart/deCrement":
                const deCrement = cartState.items.findIndex((item: any) => item.id === action.payload.id)
                cartState.items[deCrement].quanlity--;
                const intoDeCrement = cartState.items[deCrement].price * cartState.items[deCrement].quanlity
                cartState.items[deCrement].intoMoney = intoDeCrement
                cartState.total -= action.payload.price
                break;

            case "cart/deleteCart":
                cartState.items = cartState.items.filter((item: any) => item.id !== action.payload.id)
                cartState.total -= action.payload.intoMoney
                break

            default:
                return state
        }
    })
}


export default cartsReducer