const { combineReducers, createStore, applyMiddleware } = require("@reduxjs/toolkit");

const { composeWithDevTools } = require("@reduxjs/toolkit/dist/devtoolsExtension");


const reducer = combineReducers({
    takeProducts: takeProductsReducers,
    takeProductsDetails : takeProductsDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;