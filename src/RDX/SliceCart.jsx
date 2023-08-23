import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const SliceCart = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload)
        },

        remove(state, action){
            return state.filter(item=>item.no !== action.payload)
            // return state.filter((item)=> item>item.no !== action.payload)
        }
    }

})

export const {add, remove} = SliceCart.actions;
export default SliceCart.reducer