import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ProductReducer from "./product/product.reducer";

const persistConfig = {
    key: "belajarreact",
    storage: storage,
};

const rootReducer = combineReducers({
    product: ProductReducer
});

export default persistReducer(persistConfig, rootReducer);