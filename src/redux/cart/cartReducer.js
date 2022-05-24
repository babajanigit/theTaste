import { CartActionTypes } from "./cartActionTypes";
import { addItemToCart, removeItemFromCart } from './cartUtils';

const INITIAL_STATE = {
    cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        case CartActionTypes.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        case CartActionTypes.CART_CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                ),
            };

        default:
            return state;
    }
};

export default cartReducer;