import { useContext,useReducer,createContext } from "react";
import { cartReducer } from "./cartReducer";


const initialState={
    cartItems:[]
}

export const CartContext=createContext(initialState);
export const CartDispatchContext=createContext(null);

export const CartProvider=(children,cartValue=initialState)=>{
const [state,dispatch]=useReducer(cartReducer,cartValue)
return(
    <CartContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
            {children}
        </CartDispatchContext.Provider>
    </CartContext.Provider>
)
}

export function useCart(){
    return useContext(CartContext)
}

export function useCartDispatch(){
    return useContext(CartDispatchContext)
}