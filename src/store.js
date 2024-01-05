 
import { configureStore } from '@reduxjs/toolkit'
 import cartSlice from './features/cart'
import cartModal from './features/CartModal'
import productsData from './features/productsData'
     
export const store = configureStore({
    reducer:{
        products :  productsData,
        cart:cartSlice,
        cartModal:cartModal,


    }
}) 