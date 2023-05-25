import ProductTypes from "./product.type";

const INITIAL_STATE = {
    transactions: [],
    Histransactions: []
};

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProductTypes.SAVE_TRANSACTION:
            let prevProduct = [...state.transactions];
            let newTransaction = [];
            const isAvailableProduct = state.transactions.find(item => item.id === action.payload.id);
            if(isAvailableProduct){
                prevProduct = state.transactions.filter(item => item.id !== action.payload.id);
                isAvailableProduct.qty = parseInt(isAvailableProduct.qty) + parseInt(action.payload.qty);
                newTransaction = [...prevProduct, isAvailableProduct];
            } else {
                newTransaction = [...prevProduct, action.payload];
            }
            return {
                ...state,
                transactions: newTransaction,
            }
        case ProductTypes.HISTORY_TRANSACTION:
            const newTransactionHis = [...state.Histransactions, ...action.payload];
            return {
                ...state,
                Histransactions: newTransactionHis,
            }
         
        case ProductTypes.DEDUCTION_TRANSACTION:
            let prevProductDeduction = [...state.transactions];
            //console.log("data state",state.transactions);
            let newTransactionDeduction = [];
            const isAvailableDeduction = state.transactions.find(item => item.id === action.payload);
            if(isAvailableDeduction){
                prevProductDeduction = state.transactions.filter(item => item.id !== action.payload);
                isAvailableDeduction.qty = parseInt(isAvailableDeduction.qty) - 1;
                if(isAvailableDeduction.qty === 0){
                    newTransactionDeduction = [...prevProductDeduction];
                } else {
                    newTransactionDeduction = [...prevProductDeduction, isAvailableDeduction];
                }
            } 
            return {
                ...state,
                transactions: newTransactionDeduction,
            } 
            
        case ProductTypes.PLUS_TRANSACTION:
            let prevProductPlus = [...state.transactions];
            //console.log("data state",state.transactions);
            let newTransactionPlus = [];
            const isAvailablePlus = state.transactions.find(item => item.id === action.payload);
            if(isAvailablePlus){
                prevProductPlus = state.transactions.filter(item => item.id !== action.payload);
                isAvailablePlus.qty = parseInt(isAvailablePlus.qty) + 1;
                if(isAvailablePlus.qty === 0){
                    newTransactionPlus = [...prevProductPlus];
                } else {
                    newTransactionPlus = [...prevProductPlus, isAvailablePlus];
                }
            } 
            return {
                ...state,
                transactions: newTransactionPlus,
            }    
            
        case ProductTypes.DEL_TRANSACTION:
            let prevProductDel = [...state.transactions];
            //console.log("data state",state.transactions);
            let newTransactionDel = [];
            
            prevProductDel = state.transactions.filter(item => item.id !== action.payload); 
            return {
                ...state,
                transactions: newTransactionDel = [...prevProductDel]
            }     
        default:
            return state;    
    }
}

export default ProductReducer;