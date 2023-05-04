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