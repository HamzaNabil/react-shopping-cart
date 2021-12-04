
import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { orderReducer } from './orderReducer'
import { productsReducer } from './productsReducer'

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
})