import { Products } from "../types";
import {useCart} from "../hooks/useProducts";

type CartProducts = {
    products: Products[],
    amount?: number
}

export default function Cart({products}: CartProducts) {

    const {cartItems, addItemsToCart, deleteFromCart, clearCart} = useCart();

    return (
        <li>
            <h2>Cart</h2>
            <p>Items in cart: {cartItems.length}</p>
            <p>{products.length}</p>
            <button onClick={() => addItemsToCart(products)}>Add to cart</button>
            <button onClick={() => deleteFromCart(products[1])}>Delete from cart</button>
            <button onClick={() => clearCart()}>Clear cart</button>
        </li>
    )
}