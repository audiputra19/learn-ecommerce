import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleWares = [thunk];
if(process.env.NODE_ENV === "development") middleWares.push(logger);
const finalCreateStore = applyMiddleware(...middleWares)(createStore);

export const store = finalCreateStore(rootReducer, {});

export const persistor = persistStore(store);