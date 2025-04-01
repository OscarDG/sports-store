import { createContext, useEffect, useState } from 'react'

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

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
        console.log(cartItems);
    }, [cartItems])

    const addItemsToCart = (product) => {
        const inCart = cartItems.find((productInCart) => productInCart.id === product.id);

        if(inCart){
            setCartItems(
                cartItems.map((productInCart) =>{
                    if(productInCart.id === product.id){
                        return {...inCart, amount: inCart.amount + 1}
                    }else return productInCart;
                })
            );
        }else{
            setCartItems([...cartItems, {...product, amount: 1}]);
        }
    };

    const deleteFromCart = product => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if(inCart.amount === 1){
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            );
        }else{
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === product.id){
                        return {...inCart, amount: inCart.amount - 1};
                }else return productInCart
        })
        );
    }
};

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