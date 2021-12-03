import { ADD_CART, REMOVE_CART } from "./types";


export const addToCart = (product) => {
    return (dispatch, getState) => {
        const cartItems = getState().cart.cartItems
        const cartItemsClone = [...cartItems];
        var isProductExist = false;
        cartItemsClone.forEach(p => {
            if(p._id == product._id) {
                p.qty++;
                isProductExist= true;
            }
        })
        if(!isProductExist) {
            cartItemsClone.push({...product, qty: 1})
        }

        dispatch({
            type: ADD_CART,
            data: {
                cartItems: cartItemsClone
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItemsClone))
    }
}

export const removeCart = (product) => {
    return (dispatch, getState) => {
        const cartItems = getState().cart.cartItems
        const cartItemsClone = [...cartItems];
        const updatedCartItems = cartItemsClone.filter(p => p._id !== product._id)
        dispatch({
            type: REMOVE_CART,
            data: {
                cartItems: updatedCartItems
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }
}