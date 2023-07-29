import { produce } from "immer";


const initialState: any = {
    products: [],
    isLoading: false,
    error: "",
}


const productReducer = (state = initialState, action: any) => {
    return produce(state, (productSate: any) => {
        switch (action.type) {
            case "product/geting":
                productSate.isLoading = true
                break;
            case "product/getingSuccess":
                productSate.products = action.payload
                productSate.isLoading = false
                break

            case "product/addingSuccess":
                productSate.products.push(action.payload);
                productSate.isLoading = false
                break
            default:
                return state
        }
    })




}

export default productReducer