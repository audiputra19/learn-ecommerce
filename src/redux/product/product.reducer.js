import ProductTypes from "./product.type";

const INITIAL_STATE = {
    transactions: [],
};

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductTypes.SAVE_TRANSACTION:
            const newTransaction = [...state.transactions, action.payload];
            return {
                ...state,
                transactions: newTransaction,
            }
        default:
            return state;    
    }
}

export default ProductReducer;