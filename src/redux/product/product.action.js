import ProductTypes from "./product.type";

export const saveTransactionData = (dataTransaction) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ProductTypes.SAVE_TRANSACTION,
                payload: dataTransaction
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deductionTransactionData = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ProductTypes.DEDUCTION_TRANSACTION,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const plusTransactionData = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ProductTypes.PLUS_TRANSACTION,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const delTransactionData = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: ProductTypes.DEL_TRANSACTION,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }
}