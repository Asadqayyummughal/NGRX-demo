import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "./cart.actions";
export interface CartState {
    orders: number
}

export const initialCartState: CartState = {
    orders: 0
}

export const cartReducer = createReducer(
    initialCartState,
    on(addToCart, state => ({ ...state, orders: state.orders + 1 })),
    on(removeFromCart, state => ({ ...state, orders: state.orders - 1 }))
)