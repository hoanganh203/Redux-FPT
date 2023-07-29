const couterReducer = (state = { count: 0 }, action: any) => {
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

export default couterReducer