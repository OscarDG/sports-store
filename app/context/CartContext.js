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

    const [totalPrice, setTotalPrice] = useState(() => {
        try{
            const totalPriceInLocalStorage = localStorage.getItem('totalPrice');
            return totalPriceInLocalStorage ? JSON.parse(totalPriceInLocalStorage) : 0;
        }catch(error){
            console.error(error)
            return 0;
        }
    })

    const [totalItems, setTotalItems] = useState(() => {
        try{
            const totalItemsInLocalStorage = localStorage.getItem('totalItems');
            return totalItemsInLocalStorage ? JSON.parse(totalItemsInLocalStorage) : 0;
        }catch(error){
            console.error(error)
            return 0;
        }
    })

    const [showCart, setShowCart] = useState(false)

    return (
        <CartContext.Provider value={{ 
            cartItems,
            setCartItems,
            totalItems,
            setTotalItems,
            totalPrice,
            setTotalPrice,
            showCart,
            setShowCart
            }}>
            {children}
        </CartContext.Provider>
    )
}