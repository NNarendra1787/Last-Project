import * as actionTypes from '../Consta/productConst';
import axios from 'axios';

const URL = 'http://localhost:5000';

                                 //using thunk as middleware
export const getProducts = () => async (dispatch) => {
    try {
         // Dispatch an action to indicate that the request has started (optional)
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
                                
        const { data } = await axios.get(`${URL}/products`);             //it extracted from response->data[]->data
                                
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
                                
    } 
    catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};
                                                                        //using thunk as middleware
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
                                
        const { data } = await axios.get(`${URL}/product/${id}`);
                                        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
                                
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});
                                
    }
};