import {useContext} from 'react';
import {CartContext} from '@/app/context/CartContext';

export function useCart () {

    const {cartItems, setCartItems, totalItems, setTotalItems, totalPrice, setTotalPrice, showCart, setShowCart} = useContext(CartContext)//trae los productos del contexto - consume el contexto
 
    return {cartItems, setCartItems, totalItems, setTotalItems, totalPrice, setTotalPrice, showCart, setShowCart}
}