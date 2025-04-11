import { createContext, useState } from 'react'

export const CartContext = createContext();

export function CartProvider ({ children }) {

    const [cartItems, setCartItems] = useState(() => {
        try{
            const productsInLocalStorage = localStorage.getItem('cartProducts');
            return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
        }catch(error){
            console.error(error)
            return[];
        }
    });

    const [totalPrice, setTotalPrice] = useState(0)

    const [showCart, setShowCart] = useState(false)

    return (
        <CartContext.Provider value={{ 
            cartItems,
            setCartItems,
            totalPrice,
            setTotalPrice,
            showCart,
            setShowCart
            }}>
            {children}
        </CartContext.Provider>
    )
}