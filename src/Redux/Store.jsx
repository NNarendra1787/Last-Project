import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {getProductDetailsReducer, getProductsReducer} from "./ReducersFun/productRedu"
import { cartReducer } from "./ReducersFun/cartRedu";

const reducer = combineReducers({
    getProduct: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
