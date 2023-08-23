import { configureStore } from '@reduxjs/toolkit'
import SliceCart from './SliceCart'

const RStore = configureStore({
    reducer: {
        Cart: SliceCart,
    }
})

export default RStore