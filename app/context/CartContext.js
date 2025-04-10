import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();


export function CartProvider ({ children }) {


const clearCart = () => {
    setCartItems([]);
}

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addItemsToCart, 
            deleteFromCart,
            clearCart}}>
            {children}
        </CartContext.Provider>
    )
}